import React from "react";
import * as S from './style';
import dummy from './dummy.json';
import { Link } from "react-router-dom";

const MyReserve = () =>{
    const data = dummy.data;

    return(
   <S.Container>
        {data.map(d=>(
            <Link to={`/reservedetail/${d.reservationIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
        <S.ReserveContainer>
            <S.ReserveStatusTitle>
           {d.alreadyUsed == false ? <h1>예약 완료</h1> : <h2>이용 완료</h2>}
           </S.ReserveStatusTitle>
            <S.TextWrapper>
            <h1>{d.storeName}</h1>
            <h2>{d.reservationTime}</h2>
            <h3>{d.personCount}명 &nbsp; |  &nbsp; {d.selectedHall}홀 &nbsp; |  &nbsp; {d.useTime}분</h3>
            </S.TextWrapper>
            <S.DetailLinkIcon />
        </S.ReserveContainer>
        </Link>
))}
    </S.Container>
    );
}

export default MyReserve;
