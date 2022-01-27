import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import PayPageMenu from "../components/PayPageMenu";

const PayPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="결제하기"/>
    <PayPageMenu />
</BasicTemplate>
);
}

export default PayPage;