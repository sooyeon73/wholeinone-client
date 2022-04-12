import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import { useHistory } from "react-router-dom";
import ReservationStatus from "./ReservationStatus";
import useInput from "../../../hooks/useInput";

axios.defaults.withCredentials = true;

const MyReserveDetail = ( {match} ) =>{
    const history = useHistory();
    
    const idx = match.params.reservationIdx;
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    const [reason, onChangeReason, setReason] =useInput("");
    const [paymethod, setPaymethod] = useState("");
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            try {
                setError(null);
                setLoading(true);
                
                const response = await axios.get(`/reservation/${idx}`);
                setData(response.data.result);
                if (response.data.result.payMethod == "billingkeyPay"){
                    setPaymethod("카드 간편 결제");
                }
                else if (response.data.result.payMethod == "card"){
                    setPaymethod("일반 카드 결제");
                }
                else if (response.data.result.payMethod == null){
                    setPaymethod("현장 결제");
                }

            } catch (e){
                setError(e);
            }
            setLoading(false);
        };

      fetchUsers();
        
    },[]);
  
    function onClickCancel(){
        if(reason==""){
            alert("취소 사유를 입력해주세요")
        }else{
            const param ={
                reservationIdx: idx,
                refundReason : reason
            }
            console.log(reason);
            axios.post('/pay/request_refund',param).then(
                response=>{
                    // console.log(response.data)
                    if(response.data.isSuccess){
                        alert("환불을 요청했습니다")
                        window.location.reload();
                    }else alert("요청 실패")
                }
            )
        }
    };

    return(
   <S.Container>
       <S.ReserveStatusContainer>
        <S.ReserveStatusTitle>
           <ReservationStatus refundStatus={data.refundStatus} alreadyUsed={data.alreadyUsed}/>
           </S.ReserveStatusTitle>
           <h3>예약일 {data.createdAt}</h3>
           <h3>결제일 {data.paymentTime}</h3>
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
            <h1>{paymethod}</h1>
            <h1> {data.reservePrice} 원</h1>
            <h1>(-) {data.discountPrice} 원</h1>
            <h2> {data.payPrice} 원</h2>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
        {
            data.alreadyUsed === false? <S.LineBorder/> : null
        }
        {
            data.alreadyUsed === false?
            <S.ReserveDetailContainer>
            <h1>예약 취소하기</h1>
            <S.InputBar
            value={reason}
            onChange={onChangeReason}
            placeholder="취소 사유"/>
            </S.ReserveDetailContainer>
            :null
        }
        {
            data.alreadyUsed === false?
            <S.ReserveCancelButton
            onClick={onClickCancel}>예약 취소/ 환불 요청하기</S.ReserveCancelButton> 
            : null
        }
    </S.Container>
    );
}

export default MyReserveDetail;
