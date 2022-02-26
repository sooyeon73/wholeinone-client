import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import MyReserve from "../components/reserve/MyReserve";

const MyReserveListPage = ( {location,history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="예약 내역"/>
    <MyReserve location={location}/>
</BasicTemplate>
);
}

export default MyReserveListPage;