import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import dummy from "./dummy.json"
const MyPayment = (  ) =>{

    

    const [select, setSelect] = useState(1);

  const handleSelect = event => {
    const value = event.target.value;
    setSelect(value);

    //isMain 속성 변경
    data.find((e)=>e.isMain==true).isMain=false;
    data.find((e)=>e.cardIdx==value).isMain=true;
    
  }
    const data = dummy.data;

    return(
   <S.Container>
       {data.map(d=>(
           <S.Card key={d.cardIdx}>
       <S.CardInfoContainer key={d.cardIdx}>
           <S.RadioButton 
           type="radio"
           name="card"
           value={d.cardIdx}
           checked={select==d.cardIdx}
           onChange={event=>handleSelect(event)}
           />
           <h2>{d.cardType}</h2>{d.isPersonal==true? <h3>개인카드</h3>:<h3>기업카드</h3>}
         {d.isMain==true? <S.IsMain>기본</S.IsMain>:null}
 
         <br/><h1>{d.cardNumber}</h1>
        </S.CardInfoContainer>
        <S.DeleteButton>삭제</S.DeleteButton>
        </S.Card>
        


       ))}
        
        <S.ReserveCancelButton>카드 등록하기</S.ReserveCancelButton>
    </S.Container>
    );
}

export default MyPayment;
