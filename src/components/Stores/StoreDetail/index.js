import React, {useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router";
import * as S from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

const StoreDetail = ({match}) =>{
    const idx = match.params.storeIdx;
    //match.params.storeIdx로 상세 정보 불러옴
    
    const [data, setData] = useState([]);
    const [cost, setCost] =useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    //const [val, setVal] = useState([]);

    const location = useLocation();

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setError(null);
                setLoading(true);

                 const response = await axios.get(`/stores/${idx}`);
                 const cost = await axios.get(`/price/${idx}/week_price`);

                console.log(response.data);
                console.log(cost.data);
                setData(response.data.result);
                setCost(cost.data.result);

            } catch (e){
                console.log(e);
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    const history=useHistory();

    return(
   <S.Container>
        <S.StoreContainer>
           <img src={data.storeImage} alt="storeimg"/>
            <S.StoreInfoTitle>
            <h1>{data.storeName}</h1>
         
            <h2><a>★</a> <h3>{data.reviewStar}</h3> {data.storeBrand}</h2>
            <a  href={`tel:${data.storePhoneNumber}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
            <S.IconContainer>
            <S.CallIcon/> <h3>전화</h3>
            </S.IconContainer>
            </a>
            <S.IconContainer>
            <S.ShareIcon/> <h3>공유</h3>
            </S.IconContainer>
            <S.LineBorder />
            </S.StoreInfoTitle>
            <S.StoreInfo>
            <h4><S.PlaceIcon />{data.storeLocation}</h4>
            <h4><S.TimeIcon />영업 시간 - {data.storeTime}</h4>
            <h4><S.GolfIcon />타석 수 - {data.batCount}대</h4>

            <h4><S.CardIcon />가격 정보</h4>
            
            <S.CostTable>
            <table>
                <thead>
                <tr>
                <th> </th>  <th>시간</th> <th colSpan='2'>가격</th>
                 </tr>
                </thead>
                <tbody>
                    
                <th rowSpan={cost.filter(c=>c.isHoliday==false).length+1}>평일</th>
{cost.map(c=>
c.isHoliday==false ?
<tr>

{c.hole==cost[0].hole?
    
    <th rowSpan='2'>{c.startTime}~<br/>{c.endTime}</th>
:null}
<td><a>{c.hole}홀</a></td>
<td>{c.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
 </tr>
 :
null
)}

<th rowSpan='7'>주말</th>
{cost.map(c=>
c.isHoliday==true ?
<tr>

{c.hole==cost[cost.filter(c=>c.isHoliday==false).length].hole?
    
    <th rowSpan='2'>{c.startTime}~<br/>{c.endTime}</th>
:null}
<td><a>{c.hole}홀</a></td>
<td>{c.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
 </tr>
 :
null
)}
          
                 </tbody>
                </table>
                </S.CostTable>
            
            <h4><S.ServiceIcon />시설 정보</h4>
            {data.lefthandStatus ==0 &&
            data.parkingStatus ==0 &&
            data.groupseatStatus == 0&&
            data.floorscreenStatus ==0 &&
            data.lessonStatus ==0 
            ?
            <S.ServiceIconWrapper>
            <S.ServieIcon><h1>기본<br/>시설</h1></S.ServieIcon>
            </S.ServiceIconWrapper>
            :
            <S.ServiceIconWrapper>
            {data.storageStatus == 1 ? <S.ServieIcon><h1>장비<br/>보관</h1></S.ServieIcon>:null}
            {data.lefthandStatus == 1 ? <S.ServieIcon><h1>왼손<br/>타석</h1></S.ServieIcon>:null}
            {data.parkingStatus == 1 ? <S.ServieIcon><h1>주차<br/>시설</h1></S.ServieIcon>:null}
            {data.groupseatStatus == 1 ? <S.ServieIcon><h1>단체<br/>가능</h1></S.ServieIcon>:null}
            {data.floorscreenStatus == 1 ? <S.ServieIcon><h1>바닥<br/>스크린</h1></S.ServieIcon>:null}
            {data.lessonStatus == 1 ? <S.ServieIcon><h1>프로<br/>교습</h1></S.ServieIcon>:null}
            </S.ServiceIconWrapper>
}
<br />
<br />
<br />
<br />

            </S.StoreInfo>
           
        </S.StoreContainer>
        <S.ReserveButton onClick={()=>{history.push({
                pathname: '/reservation',
                state: {data: data}
            })}}>간편 예약</S.ReserveButton>
    </S.Container>
    );
}

export default StoreDetail;
