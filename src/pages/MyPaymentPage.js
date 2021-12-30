import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import MyPayment from "../components/MyPayment";
import Header from "../components/mypage/header";
const MyPaymentPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="결제 수단"/>
    <MyPayment />
</BasicTemplate>
);
}

export default MyPaymentPage;