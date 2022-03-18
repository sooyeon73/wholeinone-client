import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import Header from "../components/mypage/header"
import Reservation from "../components/reservation";

const ReservationPage = ({location, history, match}) => {
        return(
        <BasicTemplate>
            <Header history={history} title="예약하기"/>
            <Reservation match={match} hitsory={history} location = {location} props="reservation"/>
        </BasicTemplate>
        );
}

export default ReservationPage;