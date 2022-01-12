import React, {useEffect,useState} from "react";
import * as S from "./style";
import {Link} from "react-router-dom";
import axios from "axios"
import dummy from "./dummy.json"

const StoreContainer = ({props}) =>{
   
    const [data, setData] = useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
   

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setError(null);
                setData(null);
                setLoading(true);

                //찜매장 api 아직 -> 예외 dummy 처리
                if(props==="favorites")
                    setData(dummy.data);

                else
                {
                const response = await axios.get(`${props}`);
                setData(response.data.result);
                }
            } catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
    },[]);
    

    return(
   <S.Container>
        {data? data.map(d=>(
        <S.StoreContainer>
            <Link to={`/stores/${d.storeIdx}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
           <img src={d.storeImage} alt="storeimg"/>
            <S.TextWrapper>
            {d.reserveStatus === true ?  <h4>당일 예약</h4>: null}
            {d.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
            <h1>{d.storeName}</h1>
            <h2>{d.storeType}</h2>
            <h3>★ {d.reviewStar} 점</h3>
            </S.TextWrapper>
            </Link>
        </S.StoreContainer>
)):null}
    </S.Container>
    );
}

export default StoreContainer;
