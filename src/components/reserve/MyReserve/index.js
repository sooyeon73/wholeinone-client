import React, {useState, useEffect, useCallback,useRef } from "react";
import axios from "axios";
import * as S from './style';
import { Link , useHistory} from "react-router-dom";
import ReservationStatus from './ReservationStatus.js'

const MyReserve = () =>{
    
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    const [lastElement, setLastElement] = useState(null);
    const [page, setPage]=useState(1);
    const [ifDone, setIfDone]=useState(false);


    const history = useHistory();
    
      


useEffect(() => {
   
    const fetchReserves = async () =>{
        try {
            setError(null);
            setLoading(true);    
            const response = await axios.get(`/reservation?page=${page}`);
            console.log(response);

            //로드 성공시
            if(response.data.code==1000){
            setData((prev)=>[...prev,...response.data.result]);

            }
            // 더이상 로드할 데이터가 없을시 
            else
             setIfDone(true);
        } catch (e){
            setError(e);
            console.log(e);
        }
        setLoading(false);   
    };

    console.log(page); //스크롤 페이징 확인

      if(ifDone==false)
             fetchReserves();    
        
}, [ ,page]);


//무한스크롤 페이징
//마지막 요소에 ref 추가해서 확인
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
        {data.map(d=>(
            <Link to={`/reservedetail/${d.reservationIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.ReserveContainer key={d.reservationIdx}>
            <S.ReserveStatusTitle>
           <ReservationStatus refundStatus={d.refundStatus} alreadyUsed={d.alreadyUsed}/>
           </S.ReserveStatusTitle>
            <S.TextWrapper>
            <h1>{d.storeName}</h1>
            <h2>{d.reservationTime}</h2>
            <h3>{d.personCount}명 &nbsp; |  &nbsp; {d.selectHall}홀 &nbsp; |  &nbsp; {d.useTime}분</h3>
            </S.TextWrapper>
            <S.DetailLinkIcon />

        {d.alreadyUsed === true && d.refundStatus === "미환불"? 
        <S.ButtonContainer>
         {d.score ?  
         
         <S.ReviewButton>평점 ★ {d.score} </S.ReviewButton>

        :(
                        <Link to={`/review/${d.reservationIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.ReviewButton>평점 주기</S.ReviewButton>
        </Link>)}
        

        <Link to={`/store/${d.storeIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>

            <S.ReviewButton>재예약 하기</S.ReviewButton>
            </Link>

            </S.ButtonContainer>:null} 
            </S.ReserveContainer>

        </Link>
))}      
    <S.LastIndex   ref={setLastElement}></S.LastIndex>
 
    </S.Container>

    );
}

export default MyReserve;