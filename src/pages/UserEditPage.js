import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import UserEdit from "../components/mypage/UserEdit";
import Header from "../components/mypage/header";
const UserEditPage = ( {history} ) => {
return(
<BasicTemplate>
    <Header history={history} title="회원 정보 수정"/>
    <UserEdit />
</BasicTemplate>
);
}

export default UserEditPage;