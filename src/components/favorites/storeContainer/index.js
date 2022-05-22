import React, {useEffect,useState, useRef} from "react";
import * as S from "./style";
import {Link , Redirect, useHistory} from "react-router-dom";
import axios from "axios"

const StoreContainer = ({props}) =>{
   
    const history= useHistory();

    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
   
    const [lastElement, setLastElement] = useState(null);
    const [page, setPage]=useState(1);
    const [ifDone, setIfDone]=useState(false);

    useEffect(()=>{
        const fetchReserves = async () =>{
            try {
                setError(null);
                setLoading(true);
                const response = await axios.get(`${props}?page=${page}`);
                console.log(response)
                //로드 성공시
               if(response.data.code==1000){
                setData((prev)=>[...prev,...response.data.result]);
                }
                // 더이상 로드할 데이터가 없을시 
               else
                setIfDone(true);

            } catch (e){
                console.log(e);
            }
            setLoading(false);
        };
        if(ifDone==false)
        fetchReserves();     },[,page]);
    
        const observer = useRef(
            new IntersectionObserver(
                (entries) => {
                    const first = entries[0];
                    if (first.isIntersecting && ifDone==false) {
                        setPage((no) => no + 1);
                    }
                })
        );
        useEffect(() => {
            const currentElement = lastElement;
            const currentObserver = observer.current;
    
            if (currentElement) {
                currentObserver.observe(currentElement);
            }    
            return () => {
                if (currentElement) {
                    currentObserver.unobserve(currentElement);
                }
            };
            
        }, [lastElement]);
    if(!data) return null;


    return(
        
   <S.Container>
        {data? data.map(d=>(
        <S.StoreContainer>
            <Link to={`/store/${d.storeIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
           <img src={d.storeImage} alt="storeimg"/>
            <S.TextWrapper>
            {d.reserveStatus === true ?  <h4>당일 예약</h4>: null}
            {d.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
            <h1>{d.storeName}</h1>
            <h2>{d.storeType}</h2>
            <h3><a>★</a> <span>{d.reviewStar}{(""+d.reviewStar).length==1?".0":null}</span> 점</h3>
            </S.TextWrapper>
            </Link>
        </S.StoreContainer>
)):null}
    <S.LastIndex   ref={setLastElement}></S.LastIndex>

    </S.Container>
  
);
}

export default StoreContainer;
