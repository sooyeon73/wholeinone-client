import React,{useState,useEffect} from "react";
import axios from "axios";
import * as S from './style';
import dummy from "./dummy.json"

const MyCoupon = (  ) =>{

    //매장명,이름, 기간, 퍼센트
    const data = dummy.data;
    //    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    const [select, setSelect] = useState(1);

    return(
   <S.Container>
        <S.Info>
           <h1> 사용 가능한 쿠폰 <a>{data.length}</a></h1>
        </S.Info>

       {data.map(d=>(
        
        <S.Card key={d.couponIdx}>
           <S.CardInfoContainer>
           <h2>{d.couponPercentage}% 할인</h2>
            <h1>{d.storeName}</h1>
            <h3>{d.couponName}</h3>
            <h4>{d.couponDeadline}까지</h4>
            </S.CardInfoContainer>
       
        </S.Card>
       ))}
        
    </S.Container>
 
    );
}

export default MyCoupon;
