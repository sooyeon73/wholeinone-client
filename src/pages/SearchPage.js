import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Search from "../components/Search/Search"
import Header from "../components/mypage/header";

const SearchPage = ({history}) => {
return(
<BasicTemplate>
    <Search history={history} title="검색"/>
</BasicTemplate>
);
}

export default SearchPage;