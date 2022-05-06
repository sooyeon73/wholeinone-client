import React, {useState, useEffect} from "react";
import {useHistory, useLocation} from "react-router";
import * as S from "./style";
import axios from "axios";
import ImageSlide from "../ImageSlide";
import { Link } from "react-router-dom";

const StoreDetail = ({match}) =>{
    const idx = match.params.storeIdx;
    //match.params.storeIdx로 상세 정보 불러옴
    
    const [data, setData] = useState([]);
    const [cost, setCost]=useState([[],[]]);
    const [costCount , setCostCount]=useState([0,0]);

    const [specialCost, setSpecialCost] =useState([]);
    const [loading, setLoading ]=useState(false);
    const [error, setError] = useState(null);
    const [coupon,setCoupon]=useState([]);
    const [images, setImages]=useState([]);


    const MakeData = (cost)=>{
        let costData=[];
        cost.map(c=>{
            const time = c.startTime +"~"+c.endTime;
            const idx = costData.findIndex(c=>c.Time==time);
            idx==-1 ? costData.push({
                "Holi" :c.isHoliday,
                "Time" : c.startTime +"~"+c.endTime,
                "Data" : [{
                    "hole":c.hole,
                    "price":c.price
                         }]
            }) : costData[idx].Data.push({
                "hole": c.hole,
                "price": c.price
            })
        })

        return costData;
    }

    const MakeData2 = (cost) => {
        let costData = [];

        cost.map(c=>{
            const date = c.startDate + "~" + c.endDate;
            const idx = costData.findIndex(c=>c.Date==date);
            idx==-1 ? costData.push({
                "Date": date,
                "StartDate":c.startDate,
                "EndDate": c.endDate,
                "Data" : [{
                    "Time" : c.startTime +"~"+c.endTime,
                    "hole":c.hole,
                    "price":c.price
                         }]
            }) : costData[idx].Data.push({
                "Time" : c.startTime +"~"+c.endTime,
                "hole": c.hole,
                "price": c.price
            })
        })

        return costData;
}


    

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                setError(null);
                setLoading(true);
                 const response = await axios.get(`/stores/${idx}`);
                 const cost = await axios.get(`/price/${idx}/week_price`);
                 const coup = await axios.get(`/stores/coupons?storeIdx=${idx}`);
                 const specialCost = await axios.get(`/price/${idx}/period_price`)
                 const img = await axios.get(`/stores/images/${idx}`);         
                setData(response.data.result);
            console.log(cost)
            setCost([MakeData(cost.data.result.filter(c=>c.isHoliday==false)),
            MakeData(cost.data.result.filter(c=>c.isHoliday==true))])
               setCostCount([cost.data.result.filter(c=>c.isHoliday==false).length,
                cost.data.result.filter(c=>c.isHoliday==true).length])

                setCoupon(coup.data.result);
                setSpecialCost(                MakeData2(specialCost.data.result)
                );
                setImages(img.data.result);

            } catch (e){
                console.log(e);
                setError(e);
            }
            setLoading(false);
        };
            fetchData();
    },[]);
    const history=useHistory();

    const linkCopy = () =>{
        let url ="";
        let textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value=url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다");
    }
    return(
   <S.Container>
        <S.StoreContainer>
            <ImageSlide images={images} main={data.storeImage} />
            <S.StoreInfoTitle>
            <h1>{data.storeName}</h1>
         
            <h2><a>★</a> <h3>{data.reviewStar}{(""+data.reviewStar).length==1?".0":null}</h3> {data.storeBrand}</h2>
            <a  href={`tel:${data.storePhoneNumber}`} style={{ color: 'inherit', textDecoration: 'inherit'} }>
            <S.IconContainer>
            <S.CallIcon/> <h3>전화</h3>
            </S.IconContainer>
            </a>
            <S.IconContainer
            onClick={()=>linkCopy()}
            >
            <S.ShareIcon/> <h3>공유</h3>
            </S.IconContainer>
            </S.StoreInfoTitle>
            <S.LineBorder />
            {coupon.map((c=>
                  <S.CouponContainer 
                  value={c.couponIdx}
                  onClick={e=>{   axios.post(`/users/coupon?couponIdx=${c.couponIdx}`).then(response => {
                    if(response.data.code==2032)
                    alert("이미 다운 받은 쿠폰입니다.")
                    else
                    alert("쿠폰을 다운 받았습니다!");
                    
                });
                  }}
                  >  
                  <h1><a>{c.couponPercentage}%</a> {c.couponName} 받기 </h1> | 
                   <S.DownIcon/>
              </S.CouponContainer>
  
                ))}
          
  
            <S.StoreInfo>
            <h4><S.PlaceIcon />{data.storeLocation}</h4>
            <h4><S.TimeIcon />영업 시간 - {data.storeTime}</h4>
            <h4><S.GolfIcon />타석 수 - {data.batCount}대</h4>
            <h4><S.GolfIcon /><S.Info>{data.storeInfo}</S.Info></h4>

            <h4><S.CardIcon />가격 정보</h4>
                    <S.CostTable>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>  <th>시간</th> <th colSpan='2'>가격</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costCount[0]!=0?
                                <th rowSpan={costCount[0]+1}>평일</th>
                                :null}
                                {cost[0].map(c =>
                                            c.Data.map(
                                                (d,index)=> 
                                                <tr>
                                                {index==0?<th rowSpan={c.Data.length}><h1>{c.Time}</h1></th>:null}
                                                <td><a>{d.hole}홀</a></td>
                                                <td>{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                                                </tr>
                                                )
                            )}
                            {costCount[1]!=0?
                            <th rowSpan={costCount[1]+1}>주말</th>:null}
                                {cost[1].map(c =>
                                            c.Data.map(
                                                (d,index)=> 
                                                <tr>
                                                {index==0?<th rowSpan={c.Data.length}>{c.Time}</th>:null}
                                                <td><a>{d.hole}홀</a></td>
                                                <td>{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                                                </tr>
                                                )
                            )}
                 </tbody>
                </table>
                </S.CostTable>
{specialCost.length!=0?
<div>
                <h4><S.CardIcon />특별 기간 가격 정보</h4>     
                <S.CostTable>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>  <th>시간</th> <th colSpan='2'>가격</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {specialCost.map(c =>
                                            c.Data.map(
                                                (d,index)=> 
                                                <tr>
                                                {index==0?<th rowSpan={c.Data.length}>{c.StartDate}<br/>~{c.EndDate}</th>:null}
                                                <th><h1>{d.Time}</h1></th>
                                                <td><a>{d.hole}홀</a></td>
                                                <td>{d.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                                                </tr>
                                                )
                            )}
                 </tbody>
                </table>
                </S.CostTable></div>:null}


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
                pathname: `/storeReservation/${idx}`,
                state: {data: data}
            })}}>간편 예약</S.ReserveButton>
    </S.Container>
    );
}

export default StoreDetail;
