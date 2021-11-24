import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import MyReserveDetail from "../components/reserve/MyReserveDetail";

const ReserveDetailPage = ( {history , match}) => {
return(
    <BasicTemplate>
    <Header history={history} title="예약 상세 내역"/>
    <MyReserveDetail match={match}/>
</BasicTemplate>
);
}

export default ReserveDetailPage;