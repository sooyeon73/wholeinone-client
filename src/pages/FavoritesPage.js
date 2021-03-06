import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header"
import StoreContainer from "../components/favorites/storeContainer";

const FavoritesPage = ({history}) => {
        return(
        <BasicTemplate>
            <Header history={history} title="찜 매장"/>
            <StoreContainer props="favorites" />
        </BasicTemplate>
        );
}

export default FavoritesPage;