import React, {useState, useEffect, useCallback,useRef } from "react";
import axios from "axios";
import * as S from './style';
import { Link } from "react-router-dom";

const MyReserve = () =>{
    
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    const [lastElement, setLastElement] = useState(null);
    const [page, setPage]=useState(1);
    const [ifDone, setIfDone]=useState(false);


    
    
      


useEffect(() => {
   
    const fetchReserves = async () =>{
        try {
            setError(null);
            setLoading(true);    
            const response = await axios.get(`reservation?page=${page}`);
         
        //    setData((prev)=>[...prev],...response.data.result.map((d)=>d={...d,"review":0}));

            //로드 성공시
            if(response.data.code==1000){

                const d = response.data.result;                

                for(let i =0; i<d.length;i++){
                    const idx = d[i].reservationIdx;
                    const res = await axios.get(`/review/${idx}`);
                    //d[i].review=res.data.result.reviewScore;
                    d[i]={...d[i],"review":res.data.result.reviewScore};
                    }
                    console.log(d);

                 setData((prev)=>[...prev,...d]);
            //     setData((prev)=>prev.sort((a,b)=>a.reservationIdx -b.reservationIdx));
                    //sort해서 표기해도되는지
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

    axios.post('/users/refresh').then(response => {
        console.log(response);
        if(response.data.isSuccess){
        const  accessToken  = response.data.result.jwt;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }   

      if(ifDone==false)
             fetchReserves();
    });
        
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


        
    
    if(loading) console.log("loading");
    if(error) console.log("error");
    if(!data) return null;


    return(
   <S.Container>
        {data.map(d=>(
            <Link to={`/reservedetail/${d.reservationIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.ReserveContainer key={d.reservationIdx}>
            <S.ReserveStatusTitle>
           {d.alreadyUsed === false ? <h1>예약 완료</h1> : <h2>이용 완료</h2>}
           </S.ReserveStatusTitle>
            <S.TextWrapper>
            <h1>{d.storeName}</h1>
            <h2>{d.reservationTime}</h2>
            <h3>{d.personCount}명 &nbsp; |  &nbsp; {d.selectHall}홀 &nbsp; |  &nbsp; {d.useTime}분</h3>
            </S.TextWrapper>
            <S.DetailLinkIcon />
        {d.alreadyUsed === false ? 
        null : 
        
        <S.ButtonContainer>
         {d.review ?  
         
         <S.ReviewButton>평점 ★ {d.review} </S.ReviewButton>

        :(
                        <Link to={`/review/${d.reservationIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.ReviewButton>평점 주기</S.ReviewButton>
        </Link>)}
        

        <Link to={`/stores/${d.storeIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>

            <S.ReviewButton>재예약 하기</S.ReviewButton>
            </Link>

            </S.ButtonContainer>} 
            </S.ReserveContainer>

        </Link>
))}      
    <S.LastIndex   ref={setLastElement}></S.LastIndex>
 
    </S.Container>

    );
}

export default MyReserve;
