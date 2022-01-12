import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header"
import Reservation from "../components/reservation";

const ReservationPage = ({history, match}) => {
        return(
        <BasicTemplate>
            <Header history={history} title="예약하기"/>
            <Reservation match={match}/>
        </BasicTemplate>
        );
}

export default ReservationPage;