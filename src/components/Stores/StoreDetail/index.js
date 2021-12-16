import React from "react";
import * as S from "./style";
import dummy from "./dummy.json";

const StoreDetail = ({match}) =>{
    const data = dummy.data;

    console.log(match.params.reservationIdx);
    //match.params.reservationIdx으로 상세 정보 불러옴

    return(
   <S.Container>
        <S.StoreContainer>
           <img src={data.storeImage} alt="storeimg"/>
            <S.StoreInfoTitle>
            <h1>{data.storeName}</h1>
            <h2><a>★</a> {data.storeGrade} {data.storeType}</h2>
            <S.IconContainer>
            <S.CallIcon/> <h3>전화</h3>
            </S.IconContainer>
            <S.IconContainer>
            <S.ShareIcon/> <h3>공유</h3>
            </S.IconContainer>
            <S.LineBorder />
            </S.StoreInfoTitle>
        </S.StoreContainer>

    </S.Container>
    );
}

export default StoreDetail;
