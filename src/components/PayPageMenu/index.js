import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import dummy from "./dummy.json";
import useInput from "../../hooks/useInput";

const PayPageMenu = ( ) =>{

    //간편예약 -> 예약하기 -> 결제하기 -> 결제 api 사이에 전달되는 값..??
    //정보가 예약하기 페이지에서 넘어오는지?

    const data = dummy.data;
    const [couponPrice, setCouponPrice] =useState(0);
    const [pointPrice, setPointPrice]=useState(0);
    const [paySelect, setPaySelect]=useState("0");
    const [couponSelect, setCouponSelect]=useState(null);


    const handleSelect = event => {
        const value = (event.target.value);
        setPaySelect(value);
    }

    const onCouponChange = event =>{
        const value = (event.target.value);
        setCouponPrice(value);
        }
    
    const onChangePointPrice = event=>{
        const value = (event.target.value);
        if (value>data.userPoint){
            setPointPrice(data.userPoint);
        }
     
        else if (value==0){
            setPointPrice(0);

        }
        else
           setPointPrice(parseInt(value));  
        

    }
    const onFocusPrice = event =>{
        if(pointPrice==0)
        event.target.value=null;
    }
        
    return(
   <S.Container>
       <S.ReserveStatusContainer>
           <h1>예약자 이름</h1>
           <h2>{data.userName}</h2>
           <br/>
           <h1>휴대폰 번호</h1>
           <h2>{data.phoneNum}</h2>

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
        <h1>결제 수단</h1>
        <S.ReserveDetailTitle width="115px">
            <h1><S.RadioButton 
           type="radio"
           name="card"
           value={paySelect}
           selected
           onChange={event=>handleSelect(event)}
           />신용 카드</h1>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
        <S.LineBorder/>

        <S.ReserveDetailContainer>
        <h1>할인 적용</h1>
        <S.ReserveDetailTitle width="115px">
            <h1>쿠폰</h1>
            </S.ReserveDetailTitle>

            <S.ReserveDetailTitle width="190px" pos="right">
            <h1> {couponPrice} 원</h1>
        </S.ReserveDetailTitle>

            <S.DropDown value={couponSelect} onChange = {onCouponChange}>
       <option hidden>사용가능 쿠폰 {data.userCoupon} 개</option>
       {
               data.userCoupons.map(select=>(

                <option 
                key ={select.couponIdx}
                value={select.amount}
                >{select.couponName}</option>
               ))
       }
      </S.DropDown>

      <S.ReserveDetailTitle width="115px">
            <h1>포인트</h1>
            </S.ReserveDetailTitle>

            <S.ReserveDetailTitle width="190px" pos="right">
            <h1> {pointPrice} 원</h1>
        </S.ReserveDetailTitle>      

        <S.InputBar
        value={pointPrice}
        type="number"
        onChange={onChangePointPrice}
        onFocus={onFocusPrice}
     
       placeholder="0 원"
        />
        <h3>보유 포인트 {data.userPoint}원 </h3>
        <br/>
        </S.ReserveDetailContainer>

        <S.LineBorder/>

        <S.ReserveDetailContainer>
        <h1>결제 정보</h1>
        <S.ReserveDetailTitle width="115px">
            <h1>예약 금액</h1>
            <h1>할인 금액</h1>
            <h2>총 결제 금액</h2>
        </S.ReserveDetailTitle>
        <S.ReserveDetailTitle width="190px" pos="right">
            <h1> {data.payPrice} 원</h1>
            <h1>{parseInt(couponPrice)+parseInt(pointPrice)} 원</h1>
            <h2> {parseInt(data.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice))}원</h2>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>

   
            <S.Footer>
                <S.PaymentContainer>
                    <h3>총 결제금액</h3>
                    <h2>{parseInt(data.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice))} 원</h2>
                </S.PaymentContainer>

                <S.ReserveButton>결제하기</S.ReserveButton>
            </S.Footer>
            
          <br/>         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


    </S.Container>
    );
}

export default PayPageMenu;
