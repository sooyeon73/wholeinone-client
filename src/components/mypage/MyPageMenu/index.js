import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import user from "./userData.json";
import ad from "./adData.json";

const MyPageMenu = () =>{
    const userData = user.data;
    const adData = ad.data;
    return(
   <S.Container>
        <S.UserWrapper>
           <img src={userData.userImage} alt="userimg"/>
           <h3>{userData.userName} 님</h3>
       </S.UserWrapper>
       <S.Menu>
        <table>
        <tr>
            <th>
                <h4>예약 내역</h4><br/>
                <h5>{userData.reserveCount} 건</h5>
            </th>
            <th>
            <Link to={{pathname:`/favorites`}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <h4>찜 매장</h4><br/>
                <h5>{userData.favoriteCount} 개</h5>
            </Link>
            </th>
            </tr>
        <tr>
            <th>
                <h4>포인트</h4><br/>
                <h5>{userData.userPoint} P</h5>
            </th>
            <th>
                <h4>쿠폰</h4><br/>
                <h5>{userData.couponCount} 개</h5>
            </th>
        </tr>
        </table>
        </S.Menu>

        <S.MenuBar>
        <li>최근 본 매장</li>
        <li>결제 수단</li>
        <li>내가 쓴 리뷰</li>
        <li>로그아웃</li>
        </S.MenuBar>
        <S.AdContainer>
            <img src={adData.adImage} alt="adimg"/>
        </S.AdContainer>
    </S.Container>
    );
}

export default MyPageMenu;
