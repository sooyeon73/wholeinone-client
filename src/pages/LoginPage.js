import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import LoginMenu from "../components/LoginMenu";
import Header from "../components/mypage/header";

const LoginPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="로그인"/>
    <LoginMenu  history={history} />
</BasicTemplate>
);
}

export default LoginPage;