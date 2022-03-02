import React from "react";
import * as S from './style';


function ReservationStatus({refundStatus, alreadyUsed}){
    if (refundStatus === "환불 완료"){
        return (<h2>환불 완료</h2>);
    }
    else if (refundStatus === "환불 요청"){
        return (<h2>환불 요청 중</h2>);
    }
    else {
        if (!alreadyUsed) return <h1>예약 완료</h1>
        else return (<h2>이용 완료</h2>);
    }
}

export default ReservationStatus;