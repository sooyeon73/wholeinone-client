import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import SignUpMenu from "../components/SignUpMenu";
import Header from "../components/mypage/header";

const SignUpPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="회원가입"/>
    <SignUpMenu history={history}/>
</BasicTemplate>
);
}

export default SignUpPage;