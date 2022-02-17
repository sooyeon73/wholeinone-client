import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header";
import ReviewMenu from "../components/reserve/ReviewMenu";

const ReviewPage = ( {history, match} ) => {
return(
<BasicTemplate>
    <Header history={history} title="평점 주기"/>
    <ReviewMenu  match={match}/>
</BasicTemplate>
);
}

export default ReviewPage;