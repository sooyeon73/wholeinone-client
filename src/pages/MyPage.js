import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import MyPageMenu from "../components/mypage/MyPageMenu";
import Header from "../components/mypage/header";
const MyPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="마이페이지"/>
    <MyPageMenu />
</BasicTemplate>
);
}

export default MyPage;