import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header"
import MyCoupon from "../components/MyCoupon";

const MyCouponPage = ({history}) => {
    
        return(
        <BasicTemplate>
            <Header history={history} title="쿠폰함"/>
            <MyCoupon />
        </BasicTemplate>
        );
}

export default MyCouponPage;