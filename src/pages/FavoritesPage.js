import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import dummy from "./dummy.json"
import Header from "../components/mypage/header"
import StoreContainer from "../components/favorites/storeContainer";

const FavoritesPage = ({history}) => {
    const data = dummy.data;
        return(
        <BasicTemplate>
            <Header history={history} title="찜 매장"/>
            <StoreContainer data={data} />
        </BasicTemplate>
        );
}

export default FavoritesPage;