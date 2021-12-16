import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import StoreDetail from "../components/Stores/StoreDetail";

const StoreDetailPage = ( {history , match}) => {
return(
    <BasicTemplate>
    <StoreDetail match={match}/>
</BasicTemplate>
);
}

export default StoreDetailPage;