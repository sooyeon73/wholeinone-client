import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import dummy from "./dummy.json";
import useInput from "../../hooks/useInput";
import { ReserveDetailContainer } from "../reserve/MyReserveDetail/style";

const PayPageMenu = ({location, history}) =>{

    //간편예약 -> 예약하기 -> 결제하기 -> 결제 api 사이에 전달되는 값..??
    //정보가 예약하기 페이지에서 넘어오는지?
    // console.log("location",location)
    // const data = dummy.data;
    const rzvData=location.state;
    const isMobile = /Mobi/i.test(window.navigator.userAgent);

    const [couponPrice, setCouponPrice] =useState(0);
    const [pointPrice, setPointPrice]=useState(0);
    const [paySelect, setPaySelect]=useState("0");
    const [couponSelect, setCouponSelect]=useState(null);
    const [couponIdxSelect, setCouponIdxSelect]=useState(null);
    const [payMethodSelect, setPayMethodSelect]=useState("card");
    const [card, setCard]=useState(null);

    const [data, setData]=useState(dummy.data);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);


    const handleSelect = event => {
        const value = (event.target.value);
        setPaySelect(value);
    }

    const onCouponChange = event =>{
        const value = (event.target.value);
        const selectedIndex = event.target.options.selectedIndex;
        const couponIdx = event.target.options[selectedIndex].getAttribute('data-key');
        setCouponPrice(value/100 * parseInt(rzvData.payPrice));
        setCouponIdxSelect(couponIdx)
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
    const onMethodChange = event =>{
        const value = (event.target.value);
        console.log(value);
        setPayMethodSelect(value);
    }
    useEffect(()=>{
        console.log(isMobile);
        console.log(window.location.hostname);
        const param ={
            startTime : rzvData.reservationTime,
            useTime : rzvData.useTime,
            storeIdx : rzvData.storeIdx,
            roomIdx : rzvData.roomNum
        };
        const fetchData = async () => {
            try{
                setError(null);
                setCard(null);
                setData(null);
                setLoading(true);

                const isDuplicate = await axios.post('/reservation/check-duplicate-rez',param);
                if(isDuplicate.data.isSuccess == false){
                    alert('중복된 예약입니다');
                    setLoading(false);
                    history.push({
                        pathname:`/storeReservation/${rzvData.storeIdx}`,
                        state :{
                            data :{
                                storeName: rzvData.storeName,
                                storeLocation: rzvData.storeLocation
                        }}
                    });
                }
                
                const mainCard = await axios.get(`/payment/get_main`);
                if (mainCard.data.isSuccess)
                    setCard(mainCard.data.result);
                
                const userInfo = await axios.get(`/pay/get_user_info?storeIdx=${rzvData.storeIdx}`)
                if (userInfo.data.isSuccess)
                    setData(userInfo.data.result);
                
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
        const jquery = document.createElement("script");
        jquery.src="https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery)
        document.head.appendChild(iamport);
    
        return () => {document.head.removeChild(jquery);
        document.head.removeChild(iamport);}   
    },[]);

    const onClickPay = ()=>{
        // const billingKey="";
        try{
            // console.log(paySelect);
            if (paySelect == "billingkeyPay"){
                billingKeyPay();
            }
            if (paySelect=="normal"){
                normalPay(payMethodSelect);
            }
            if (paySelect == "offline"){
                offlinePay();
            }
        }catch(e){
            setError(e);
        }
    }

    const offlinePay=()=>{
        const param = {
            reservationIdx:rzvData.reservationIdx,
            storeIdx: rzvData.storeIdx,
            couponIdx: couponIdxSelect,
            payMethod : "offline",
            amount : parseInt(rzvData.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice)),
            point: parseInt(pointPrice),

            reservationTime : rzvData.reservationTime,
            useTime: rzvData.useTime,
            roomIdx: rzvData.roomNum,
            selectedHall:rzvData.selectedHall,
            request: rzvData.request,
            personCount:rzvData.personCount,
            discountPrice:parseInt(couponPrice)+parseInt(pointPrice),
            price:parseInt(rzvData.payPrice)
        }
        console.info(param)
        axios.post(`/pay/request_offlinePayment`,param).then(response => {
            // console.log(response)
            if (response.data.code == 1000){
                if (response.data.result.status=="결제 성공"){
                    alert("예약에 성공했습니다.");
                    history.push(`/store/${rzvData.storeIdx}`);
                }
                else{
                    alert("예약에 실패했습니다.");
                }
            }
            else
                alert("예약에 실패했습니다.");
}        );
    }

    const billingKeyPay = () =>{
        const param = {
            // reservationIdx:data.reservationIdx, // 추후 api에서 가져오기 
            userPaymentIdx:card.userPaymentIdx,
            payMethod : "billingkeyPay",
            storeIdx: rzvData.storeIdx,//추후 api에서 가져오기
            couponIdx: couponIdxSelect,
            amount : parseInt(rzvData.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice)),
            point: parseInt(pointPrice),

            reservationTime : rzvData.reservationTime,
            useTime: rzvData.useTime,
            roomIdx: rzvData.roomNum,
            selectedHall:rzvData.selectedHall,
            request: rzvData.request,
            personCount:rzvData.personCount,
            discountPrice:parseInt(couponPrice)+parseInt(pointPrice),
            price:parseInt(rzvData.payPrice)
        }
        axios.post(`/pay/request_billingKeyPayment`,param).then(response => {
            // console.log(response)
            if (response.data.code == 1000){
                if (response.data.result.status=="결제 성공"){
                    alert("예약에 성공했습니다.");
                    history.push(`/store/${rzvData.storeIdx}`);
                }
                else{
                    alert("결제에 실패했습니다.");
                }
            }
            else{
                alert("결제에 실패했습니다.");
            }
        });
    }

    const normalPay = payMethod =>{
        console.info(payMethod)
        const {IMP} = window;
        IMP.init('imp92209873');

    const param = {
        pg:'danal_tpay',
        pay_method: payMethod, //client에서 선택 card(신용카드), samsung(삼성페이), trans(실시간계좌이체), vbank(가상계좌), 또는 phone(휴대폰소액결제), payco(페이코 허브형)
        amount:parseInt(rzvData.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice)), // reservation page에서 get
        name:rzvData.storeName+"_예약", // 필수 값(상품명) 추후 api에서 가져오기
        buyer_name:data.userName, // 구매자 이름 추후 api에서 가져오기
        buyer_email:data.userEmail, // 아이디 추후 api에서 가져오기
        buyer_tel:data.phoneNum, // 전화번호 추후 api에서 가져오기
        // m_redirect_url: 'https://'+window.location.hostname+':8080/stores/'+rzvData.storeIdx
    };

    if (isMobile){
        console.log('mobile');
        IMP.request_pay(param,callback);
    }else {
        console.log('pc');
        param.pg='kcp';
        IMP.request_pay(param,callback);
    }
    }
    const callback=(response)=>{
        const {
            success, error_msg, status, customer_uid, imp_uid, merchant_uid, paid_amount,pay_method 
        }=response;
        if (success){
            // console.log("결제 설공");
            // console.log(response);
            //
            const param = {
                reservationIdx:rzvData.reservationIdx,
                storeIdx: rzvData.storeIdx,
                couponIdx: couponIdxSelect,
                merchantUid:merchant_uid,
                impUid:imp_uid,
                payMethod : pay_method,
                amount : paid_amount,
                point: parseInt(pointPrice),

                reservationTime : rzvData.reservationTime,
                useTime: rzvData.useTime,
                roomIdx: rzvData.roomNum,
                selectedHall:rzvData.selectedHall,
                request: rzvData.request,
                personCount:rzvData.personCount,
                discountPrice:parseInt(couponPrice)+parseInt(pointPrice),
                price:parseInt(rzvData.payPrice)
            }
            console.info(param)
            axios.post(`/pay/request_payment`,param).then(response => {
                // console.log(response)
                if (response.data.code == 1000){
                    if (response.data.result.status=="결제 성공"){
                        alert("예약에 성공했습니다.");
                        history.push(`/store/${rzvData.storeIdx}`);
                    }
                    else{
                        alert("결제에 실패했습니다.");
                    }
                }
                else{
                    alert("결제에 실패했습니다.");
                }
            });
        }
        else{
            alert("결제에 실패했습니다.");
            // console.log("결제 실패");
            // console.log(error_msg);
        }
    }
    return(
        data && rzvData?
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
            <h1>{rzvData.reservationTime}</h1>
            <h1>{rzvData.storeName}</h1>
            <h1>{rzvData.selectedHall} 홀 </h1>
            <h1>{rzvData.personCount} 명</h1>
            <h1>{rzvData.useTime} 분</h1>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>

        <S.LineBorder/>
        
        <S.ReserveDetailContainer>
        <h1>결제 수단</h1>
        <S.ReserveDetailTitle width="100%">
            {/* <label><h1><S.RadioButton 
                type="radio"
                name="payment"
                value="offline"
                checked={paySelect=="offline"}
                onChange={event=>handleSelect(event)}
                />현장 결제</h1></label> */}
            <label><h1><S.RadioButton 
           type="radio"
           name="payment"
           value="billingkeyPay"
           checked={paySelect=="billingkeyPay"}
           onChange={event=>handleSelect(event)}
           />간편 결제</h1></label>
            {
                card !== null && card!=undefined
            ? 
            <S.Card key={card.userPaymentIdx}
                hidden={paySelect!=="billingkeyPay"}>
                <S.CardInfoContainer key={card.userPaymentIdx}>
                <h2>{card.cardCode}</h2>
                <h3>{card.cardType}</h3>
                {card.isMain==true? <S.IsMain>기본</S.IsMain>:null}
                <br/><h1>{card.cardNumber}</h1>
                </S.CardInfoContainer>
            </S.Card>
            :<h1 hidden={paySelect!=="billingkeyPay"}>
                등록된 대표 카드가 없습니다.</h1>
        }
       <h1><S.RadioButton 
           type="radio"
           name="payment"
           value="normal"
           checked={paySelect=="normal"}
           onChange={event=>handleSelect(event)}
           /> 일반 결제</h1>
        <S.DropDown disabled={paySelect!=="normal"} onChange = {onMethodChange}>
            <option
            value="card"
            >신용 카드</option>
            
            {/* <option
            value="samsung"
            >삼성 페이</option>
            
            <option
            value="trans"
            >실시간 계좌이체</option>

            <option 
            value="vbank"
            >가상계좌</option>
            
            <option 
            value="phone"
            >휴대폰 소액결제</option>

            <option 
            value="payco"
            >페이코 간편 결제</option> */}
      </S.DropDown>

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
                value={select.couponPercentage}
                data-key={select.couponIdx}
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
            <h1> {rzvData.payPrice} 원</h1>
            <h1>{parseInt(couponPrice)+parseInt(pointPrice)} 원</h1>
            <h2> {parseInt(rzvData.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice))}원</h2>
        </S.ReserveDetailTitle>
        </S.ReserveDetailContainer>
            <S.Footer>
                <S.PaymentContainer>
                    <h3>총 결제금액</h3>
                    <h2>{parseInt(rzvData.payPrice) -(parseInt(couponPrice)+parseInt(pointPrice))} 원</h2>
                </S.PaymentContainer>

                <S.ReserveButton
                onClick={onClickPay}
                >결제하기</S.ReserveButton>
            </S.Footer>
          <br/>         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


    </S.Container>
    :null);
}

export default PayPageMenu;
