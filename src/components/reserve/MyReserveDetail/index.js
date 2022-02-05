import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
const MyReserveDetail = ( {match} ) =>{

    
    const idx = match.params.reservationIdx;
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async () =>{
            try {
                setError(null);
                setLoading(true);
                
                const response = await axios.get(`/reservation/${idx}`);
                setData(response.data.result);

            } catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    },[]);
  


    return(
   <S.Container>
       <S.ReserveStatusContainer>
        <S.ReserveStatusTitle>
           {data.alreadyUsed == false ? <h1><S.UnCheckedIcon/>예약 완료</h1> : <h2><S.CheckedIcon/>이용 완료</h2>}
           </S.ReserveStatusTitle>
           <h3>예약일 {data.paymentTime}</h3>
        </S.ReserveStatusContainer>
        <S.LineBorder/>
        <S.ReserveDetailContainer>
        <h1>예약 정보</h1>
        <S.ReserveDetailTitle width="115px">
            <h1>날짜/시간</h1>
            <h1>매장</h1>
            <h1>선택 홀 수 </h1>
            <h1>인원 수</h1>
            <h1>이용 시간</h1>
        </S.ReserveDetailTitle>
        <S.ReserveDetailTitle>
            <h1>{data.reservationTIme}</h1>
            <h1>{data.storeName}</h1>
            <h1>{data.selectedHall} 홀 </h1>
            <h1>{data.personCount} 명</h1>
            <h1>{data.useTime} 분</h1>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
        <S.LineBorder/>
        <S.ReserveDetailContainer>
        <h1>결제 정보</h1>
        <S.ReserveDetailTitle width="115px">
            <h1>결제 방법</h1>
            <h1>예약 금액</h1>
            <h1>할인 금액</h1>
            <h2>총 결제 금액</h2>
        </S.ReserveDetailTitle>
        <S.ReserveDetailTitle width="190px" pos="right">
            <h1>카드 결제</h1>
            <h1> {data.reservePrice} 원</h1>
            <h1>(-) {data.discountPrice} 원</h1>
            <h2> {data.payPrice} 원</h2>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
        <S.ReserveCancelButton>예약 취소하기</S.ReserveCancelButton>
    </S.Container>
    );
}

export default MyReserveDetail;
