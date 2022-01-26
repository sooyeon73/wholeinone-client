import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import dummy from "./dummy.json"
import { param } from "jquery";
const MyPayment = (  ) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    const [select, setSelect] = useState(1);

    const handleSelect = event => {
    const value = (event.target.value);
    setSelect(value);
    const param ={
        userPaymentIdx:1,
        isMain:true
    }

    //isMain 속성 변경
    //true->false
    try{
        param.userPaymentIdx=data.find((e)=>e.isMain==true).userPaymentIdx;
        param.isMain=false;
        axios.post(`/payment/update_main`,param);
        data.find((e)=>e.isMain==true).isMain=false;
    }catch(error){console.log("기본 결제 수단이 없음")}
    
    //false->true
    param.userPaymentIdx=data.find((e)=>e.userPaymentIdx==value).userPaymentIdx
    param.isMain=true
    axios.post(`/payment/update_main`,param);
    data.find((e)=>e.userPaymentIdx==value).isMain=true;
}

  useEffect(()=>{
    const fetchUsers = async () =>{
        try {
            setError(null);
            setLoading(true);
            
            axios.get(`/payment/user_payments`).then(response => {
                console.log(response.data.result);
                setData(response.data.result);
                //select 초기화 
                var selection;
                response.data.result.map(d=>{
                  if(d.isMain){
                      selection = d.userPaymentIdx;
                  }
                })
                setSelect(selection);
            });
        } catch (e){
            setError(e);
        }
        setLoading(false);
    };
    fetchUsers();

    
    const jquery = document.createElement("script");
    jquery.src="https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src="https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery)
    document.head.appendChild(iamport);

    
    return () => {document.head.removeChild(jquery);
    document.head.removeChild(iamport);}

    
},[]);

const onClickPayment = ()=>{
    // const billingKey="";
    axios.get(`/payment/billingKey`).then(response=>{
        const billingKey=response.data.result.billingKey
        const {IMP} = window;
        IMP.init('imp92209873');

        const param = {
            pg:'kcp_billing',//카드 등록시
            pay_method:'card', // card만 지원
            amount:0, // 무조건 0
            name:"골프장 카드 등록", // 필수 값(상품명) 
            customer_uid: billingKey, // 빌링키와 대응(카드 고유 번호)
            // buyer_name:'kim', // 구매자 이름 (선택)
            m_redirect_url:'http://localhost:3000/payment'
        };
        IMP.request_pay(param,callback);
        });
}
const callback=(response)=>{
    const {
        success, error_msg, status, customer_uid
    }=response;
    if (success){
        console.log("카드 등록 설공");
        console.log(response);
        axios.post(`/payment/register_card?billingKey=${customer_uid}`).then(response => {
            console.log(response)
            const newData = data.concat(response.data.result);
            setData(newData);
        });
    }
    else{
        console.log("카드 등록 실패");
        console.log(error_msg);
    }
}
    // const data = dummy.data;

if(!data) return null;
    return(
   <S.Container>
       {data.map(d=>(
           <S.Card key={d.userPaymentIdx}>
           <S.CardInfoContainer key={d.userPaymentIdx}>
           <S.RadioButton 
           type="radio"
           name="card"
           value={d.userPaymentIdx}
           checked={select==d.userPaymentIdx}
           onChange={event=>handleSelect(event)}
           />
           <h2>{d.cardCode}</h2>
           <h3>{d.cardType}</h3>
         {d.isMain==true? <S.IsMain>기본</S.IsMain>:null}
 
         <br/><h1>{d.cardNumber}</h1>
        </S.CardInfoContainer>
        <S.DeleteButton>삭제</S.DeleteButton>
        </S.Card>
       ))}
        
        <S.ReserveCancelButton
        onClick={onClickPayment}
        >카드 등록하기</S.ReserveCancelButton>
    </S.Container>
 
    );
}

export default MyPayment;
