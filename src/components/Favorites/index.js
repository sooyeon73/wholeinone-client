import React from "react";
import * as S from "./style";
import dummy from "./dummy.json";

const Favorites = () =>{

    const data = dummy.data;

    return(
   <S.Container>
       <S.BackButton />
    <S.Header>
        <h1>찜 매장</h1>
    </S.Header>
{data.map(d=>(
    <S.StoreContainer>
        <S.ImageWrapper>
           <img src={d.storeImage}/>
        <S.TextWrapper>
        {d.reserveStatus === true ?  <h4>당일 예약</h4>: null}
        {d.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
        <h1>{d.storeName}</h1>
        <h2>{d.storeType}</h2>
        <h3>{d.storeCost}원</h3>
        </S.TextWrapper>
        </S.ImageWrapper>

       </S.StoreContainer>
))}
    </S.Container>
    );
}

export default Favorites;
