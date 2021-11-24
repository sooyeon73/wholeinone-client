import React from "react";
import * as S from './style';
import dummy from './dummy.json'
const MyReserveDetail = ( {match} ) =>{
    const data = dummy.data;

    console.log(match.params.reservationIdx);
    //match.params.reservationIdx으로 상세 정보 불러옴

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
            <h1>{data.reservationTime}</h1>
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
            <h1>{data.reservePrice.toLocaleString('ko-KR')} 원</h1>
            <h1>(-) {data.discountPrice.toLocaleString('ko-KR')} 원</h1>
            <h2>{data.payPrice.toLocaleString('ko-KR')} 원</h2>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
        <S.ReserveCancelButton>예약 취소하기</S.ReserveCancelButton>
    </S.Container>
    );
}

export default MyReserveDetail;
