import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
//import dummy from "./dummy.json"
import Header from "../components/mypage/header"
import StoreContainer from "../components/favorites/storeContainer";

const VisitedPage = ({history}) => {
    
        return(
        <BasicTemplate>
            <Header history={history} title="최근 본 매장"/>
            <StoreContainer props="visited" />
        </BasicTemplate>
        );
}

export default VisitedPage;