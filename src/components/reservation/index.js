import React, {useState, useEffect} from "react";
import * as S from "./style";
import axios from "axios";

const Reservation = ({match}) =>{

    const idx = match.params.storeIdx;
    //match.params.storeIdx로 상세 정보 불러옴
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setError(null);
                setLoading(true);
                const response = await axios.get(`/stores/${idx}`);
                console.log(response.data);

                setData(response.data.result);
            } catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    return(
        <S.Container>
            <S.StoreinfoContainer>
                <h2>{data.storeName}</h2>
            </S.StoreinfoContainer>
            <S.LineBorder />
            <S.SelectReservationinfo>

            </S.SelectReservationinfo>
        </S.Container>
    );
}

export default Reservation;
