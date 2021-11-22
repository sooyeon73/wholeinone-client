import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import reserveList from "../components/reserveList";
const ReserveListPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="예약 내역"/>
    <reserveList />
</BasicTemplate>
);
}

export default ReserveListPage;