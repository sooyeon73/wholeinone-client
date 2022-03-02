import React, {useState, useEffect, useCallback,useRef } from "react";
import axios from "axios";
import * as S from './style';
import { Link } from "react-router-dom";
import ReservationStatus from './ReservationStatus.js'

const MyReserve = () =>{
    
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    const [lastElement, setLastElement] = useState(null);
    const [page, setPage]=useState(1);

    const fetchReserves = useCallback(async () =>{
        try {
            setError(null);
            setLoading(true);    
            const response = await axios.get(`/reservation?page=${page}`);
            console.log(response);
            if(response.data.code==1000){setData((prev)=>[...prev,...response.data.result]);}

        } catch (e){
            setError(e);
        }
        setLoading(false);
    }
,[page]);

useEffect(() => {
    if (page <= 2) {
        fetchReserves();
        console.log(page); //스크롤 페이징 확인
    }
}, [page]);


//무한스크롤 페이징
//마지막 요소에 ref 추가해서 확인
        const observer = useRef(
            new IntersectionObserver(
                (entries) => {
                    const first = entries[0];
                    if (first.isIntersecting) {
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
        

          
    
    if(loading) console.log("loading");
    if(error) console.log("error");
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
        </S.ReserveContainer>
        </Link>
))}      
    <div   ref={setLastElement}
 />
    </S.Container>

    );
}

export default MyReserve;
