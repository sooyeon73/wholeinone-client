import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './style';

import axios from "axios";

import Burger from '../Burger/Burger';
import Mainbuttons from '../MainButtons/Mainbuttons';

//import Naver_maps from './Navermap/Naver_map';
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Rectangle} from 'react-naver-maps';

import { MaskedViewIOS, Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { getButtonUnstyledUtilityClass } from '@mui/material';
import { map } from 'jquery';
import { Breifinfo } from './Navermap/style';

let nowlati=null;
let nowlong=null;

let nowbrandch=false;
let nowbrandvu=null;

let nowfacich=false;
let nowfacivu=null;

let nowdisch=false;
let nowdisvu=16;

let loccode=0;

let mainbuttonloc=null;
let listdata=null;

let mkmk=null;
let mkdisplay=false;

let brandstate = null;

const GeoLocationAPI = ({}) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const lati = JSON.stringify(position.coords.latitude);
                const long = JSON.stringify(position.coords.longitude);
                setLatitude(lati);
                setLogitude(long);
                nowlati=latitude;
                nowlong=longitude;
            },
            error => { console.log(error.code, error.message); },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
        )
    }
    return (
      <View>
        {geoLocation()}
      </View>
  )
}

 const NaverMapComponent = () => {

  let [data, setData] = useState([]);
  const [tomainbtndata, settomainbtnData]=useState([]);
  const [loading, setLoading ]=useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const history = useHistory();

  const geoLocation = () => {
    Geolocation.getCurrentPosition(
        position => {
            const latitude = JSON.stringify(position.coords.latitude);
            const longitude = JSON.stringify(position.coords.longitude);
            nowlati=latitude;
            nowlong=longitude;
        },
        error => { console.log(error.code, error.message); },
        {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
    )
  }
  const checksetiings = () =>{
    try{
      let brandcheck = location.state.brandcheck;
      let brandvalue = location.state.brandvalue;

      //console.log(brandcheck);
      //console.log(brandvalue);

      nowbrandch=brandcheck;
      if(nowbrandch==null) nowbrandch=false;
      nowbrandvu=brandvalue;
    
      let facicheck = location.state.facicheck;
      let facivalue = location.state.facivalue;
    
      //console.log(facicheck);
      //console.log(facivalue);

      nowfacich=facicheck;
      if(nowfacich==null) nowfacich=false;
      nowfacivu=facivalue;
    
      let discheck = location.state.discheck;
      let disvalue = location.state.disvalue;
    
      //console.log(discheck);
      //console.log(disvalue);

      nowdisch=discheck;
      if(nowdisch==null) nowdisch=false;
      nowdisvu=disvalue;

      let nowbrandstate = location.state.brandstate;
      //console.log("브스");
      //console.log(brandstate);
      brandstate=nowbrandstate;

      console.log("록코드: " + location.state.loccode);

    } catch(e){
      nowbrandch=false;
      nowfacich=false;
      nowdisch=false;
    }
  }
  checksetiings();
  let [bounds, setBounds] = useState({
    x: null,
    y: null,
    _lat: null,
    _lng: null
  })
  const [center, setCenter] = useState({
    lat: null,
    lng: null
  });
  let naverMapRef = useRef();

  const navermaps = window.naver.maps;

  function changeCenter(center){
    this.setState({center})
  }

  let onChange = () => {
    fetch();
  };
  
  useEffect(()=>{
    console.log("location 변화 감지!");
    if(location.state.loccode!=1){
      checksetiings();
      onChange();
    }
  },[location]);

  const fetch = useCallback(async() =>{
    try {
      //console.log("         fetch 진입");
      //console.log("         "+nowbrandch + ", "+nowfacich+", "+nowdisch);
      //checksetiings();
      //console.log(nowbrandch + ", "+nowfacich+", "+nowdisch);
        setError(null);
        setLoading(true);
        //setData([]);
        
        if(nowbrandch == true){ //브랜드 체크했을 경우

          if(nowfacich == true){ //시설 체크했을 경우

            if(nowdisch == true){ //거리 체크했을 경우

              console.log("         브랜드 O, 시설 O, 거리 O");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+brandstate+`&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);

            } else if(nowdisch==false){ // 브랜드 시설은 체크했는데 거리는 체크 안했을 경우

              console.log("         브랜드 O, 시설 O, 거리 X");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+brandstate+`&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=16`);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);

            }

          } else if(nowfacich==false){

            if(nowdisch==true){ //브랜드 거리는 체크했는데 시설은 체크 안한 경우

              console.log("         브랜드 O, 시설 X, 거리 O");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+brandstate+`&lefthandStatus=-1&parkingStatus=-1&groupseatStatus=-1&floorscreenStatus=-1&storageStatus=-1&lessonStatus=-1&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);

            } else if(nowdisch==false){ // 브랜드는 체크했는데 시설 거리는 체크 안했을 경우

              console.log("         브랜드 O, 시설 X, 거리 X");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+brandstate+`&lefthandStatus=-1&parkingStatus=-1&groupseatStatus=-1&floorscreenStatus=-1&storageStatus=-1&lessonStatus=-1&distance=16`); 
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);
            }
          }
        } else if(nowbrandch==false){ //

          if(nowfacich==true){ //

            if(nowdisch==true){ // 시설 거리는 체크했는데 브랜드는 체크 안한 경우 -> 브랜드 체크 안했을 때 전체선택 처리 필요

              console.log("         브랜드 X, 시설 O, 거리 O");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);

            } else if(nowdisch==false){ // 시설은 체크했는데 브랜드 거리는 체크 안했을 경우

              console.log("         브랜드 X, 시설 O, 거리 X");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=16`);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);

            }
          } else if(nowfacich==false){

            if(nowdisch==true){ // 거리는 체크했는데 브랜드 시설은 체크 안한 경우

              console.log("         브랜드 X, 시설 X, 거리 O");
              console.log("         brandstate: "+brandstate);
              console.log("         facivalue: "+nowfacivu);
              console.log("         disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=&lefthandStatus=-1&parkingStatus=-1&groupseatStatus=-1&floorscreenStatus=-1&storageStatus=-1&lessonStatus=-1&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);
            }
             else if(nowdisch==false){ // 아무것도 체크 안한 경우

              console.log("         아무것도체크안함");
              const response = await axios.get(`stores/map?storeName=&userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1`);
              console.log("         아무것도체크안함 리스폰스호출");
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              listdata=response.data.result;
              setData(response.data.result);
            }
          }
        }
        //console.log("DATA: "+data);
        //console.log("체크밸류 종료");
        let tomainbtns = () =>{
          //console.log("tomainbtns!");
          console.log(listdata);
          if(listdata==undefined){
            console.log("리스트데이터 undefined");
          }else{
            console.log("리스트데이터 값 존재");
            //history.replace('/');
            console.log(listdata);
            console.log("loccode:" + loccode);
            console.log("loccode1: "+location.state.loccode);
            console.log(listdata);
            //loccode=location.state.loccode;
            if(!location.state.loccode){
              console.log("MAP ---> Mainbtns");
              history.replace({
                pathname: "/",
                state:{
                  //marker: mk,
                  listdata: listdata,

                  brandcheck : nowbrandch,
                  brandvalue : nowbrandvu,
                
                  facicheck : nowfacich,
                  facivalue : nowfacivu,
                
                  discheck : nowdisch,
                  disvalue : nowdisvu,

                  brandstate : brandstate,
                  loccode: 1,
                }
              });
            }
            loccode=1;
            listdata=null;
            //console.log(loccode);
          }
        }
        tomainbtns();
    } catch (e){
        setError(e);
        console.log(e);
    }
    setLoading(false);
      },[]);
  
  function clicklistener(e){
    console.log("클릭 리스너");
    mkdisplay=false;
  }
  function draglistener(e){
    console.log("네이버 map 드래그 리스너");
    loccode=0;
  }
  function dragstartlistener(e){
    //console.log("naver map dragstart listener");    

  }
  function handleBoundsChanged(e){
    //console.log("BoundsChanged event: 지도 경계가 변경될 때 발생");
  }
  function handleCenterChanged(e){
    //console.log("센터체인지");
  }
  function handleCenterPointChanged(e){
    //console.log("센터포인터체인지");
  }
  function handleTilesLoaded(e){
    //console.log("네이버 map 타일 로딩됨");
  }
  function handleIdle(e){
    console.log("naver map Idle event!!");
    bounds=naverMapRef.getCenter();
    setBounds(naverMapRef.getCenter());
    setCenter({lat: bounds._lat, lng: bounds._lng});
    nowlati=bounds._lat;
    nowlong=bounds._lng;
    onChange();
    loccode=0;
  }
  function drawMarkers(mk){
    let pos=new navermaps.LatLng(mk.storeLatitude, mk.storeLongitude)
    return(
      <Marker
        key={mk.storeIdx}
        position={new navermaps.LatLng(mk.storeLatitude, mk.storeLongitude)}
        animation={0}
        onClick={()=>{
          naverMapRef.panTo(pos);
          mkmk=mk;
          mkdisplay=true;
          //makediv(mk);
          history.replace({
            pathname: "/",
            state:{
              marker: mk,
              listdata: listdata,

              brandcheck : nowbrandch,
              brandvalue : nowbrandvu,
            
              facicheck : nowfacich,
              facivalue : nowfacivu,
            
              discheck : nowdisch,
              disvalue : nowdisvu,

              brandstate : brandstate,
            }
          })
        }}
        />
    );
  }  

  
  return (
    <div style={{
      zindex: '-999',
    }}>
    <NaverMap
      mapDivId={"react-naver-map"}
      onClick={clicklistener}
      onDragend={draglistener}
      onDragstart={dragstartlistener}
      onBoundsChanged={handleBoundsChanged}
      onCenterChanged={handleCenterChanged}
      onCenterPointChanged={handleCenterPointChanged}
      onTilesloaded={handleTilesLoaded}
      onIdle={handleIdle}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '0px',
        zindex: '-999',
      }}
      defaultCenter={{ lat: nowlati, lng: nowlong }}
      defaultZoom={15}
      naverRef={ref => {naverMapRef = ref}}>
      
      {data && data.map(drawMarkers)}
      </NaverMap>
    </div>
  );
}

const Main = () => { 
  const history = useHistory();
  if(mkdisplay==false){
    makeclickdiv();
  }
  //console.log("메인메인");
  console.log(mkdisplay);
  function makeclickdiv(){
    return(
      <S.MarkClickConatiner>
      {mkmk!=null && mkdisplay &&
        <S.StoreContainer onClick={()=>{history.push({
          pathname: `/stores/${mkmk.storeIdx}`,
          state: {data: mkmk}})}}>
        <img src={mkmk.storeImage} alt="storeimg"/>
        <S.TextWrapper>
          {mkmk.reserveStatus === true ?  <h4>당일 예약</h4>: null}
          {mkmk.couponStatus === true ?   <h5>할인 쿠폰</h5>: null}
          <h1>{mkmk.storeName}</h1>
          <h2>{mkmk.storeBrand}</h2>
          <h2>★{mkmk.reviewStar}</h2>
          <h2>{mkmk.distanceFromUser}km</h2>
          {/*
          <h3>{d.storeCost.toLocaleString('ko-KR')} 원</h3>
          */}
        </S.TextWrapper>
      </S.StoreContainer> 
        }
      </S.MarkClickConatiner>
    )
  }
  return (
    <>
      <RenderAfterNavermapsLoaded
          ncpClientId={'m3c5d30dn7'}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
          >
            <NaverMapComponent />
      </RenderAfterNavermapsLoaded>
    <S.Container>
      <Burger/>
      <GeoLocationAPI/>
      <Mainbuttons/>
      {makeclickdiv()}
    </S.Container>
    </>
  //Main  
  );
}

export default Main;