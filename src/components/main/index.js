import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './style';

import axios from "axios";

import Burger from '../Burger/Burger';
import Mainbuttons from '../MainButtons/Mainbuttons';

//import Naver_maps from './Navermap/Naver_map';
import { RenderAfterNavermapsLoaded, NaverMap, Marker, Rectangle} from 'react-naver-maps';

import { Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity } from 'react-native';
import { useHistory, useLocation } from 'react-router-dom';
import { getButtonUnstyledUtilityClass } from '@mui/material';
import { map } from 'jquery';

let nowlati=null;
let nowlong=null;

let nowbrandch=false;
let nowbrandvu=null;

let nowfacich=false;
let nowfacivu=null;

let nowdisch=false;
let nowdisvu=null;

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

 const NaverMapComponent = ({history}) => {

  let [data, setData] = useState([]);
  const [loading, setLoading ]=useState(false);
  const [error, setError] = useState(null);

  let location = useLocation();

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
  try{
    let brandcheck = location.state.brandcheck;
    let brandvalue = location.state.brandvalue;

    nowbrandch=brandcheck;
    nowbrandvu=brandvalue;
  
    let facicheck = location.state.facicheck;
    let facivalue = location.state.facivalue;
  
    nowfacich=facicheck;
    nowfacivu=facivalue;
  
    let discheck = location.state.discheck;
    let disvalue = location.state.disvalue;
  
    nowdisch=discheck;
    nowdisvu=disvalue;
  } catch(e){
    nowbrandch=false;
    nowfacich=false;
    nowdisch=false;
  }

  console.log("  ");

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
    fetch();
  },[location]);

  const fetch = useCallback(async() =>{
    try {
        setError(null);
        setLoading(true);
        setData([]);
        
        if(nowbrandch == true){ //브랜드 체크했을 경우

          if(nowfacich == true){ //시설 체크했을 경우

            if(nowdisch == true){ //거리 체크했을 경우

              console.log("브랜드 O, 시설 O, 거리 O");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+nowbrandvu+`&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);

            } else if(nowdisch==false){ // 브랜드 시설은 체크했는데 거리는 체크 안했을 경우

              console.log("브랜드 O, 시설 O, 거리 X");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+nowbrandvu+`&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=16`);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);

            }

          } else if(nowfacich==false){

            if(nowdisch==true){ //브랜드 거리는 체크했는데 시설은 체크 안한 경우

              console.log("브랜드 O, 시설 X, 거리 O");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+nowbrandvu+`&lefthandStatus=0&parkingStatus=0&groupseatStatus=0&floorscreenStatus=0&storageStatus=0&lessonStatus=0&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);

            } else if(nowdisch==false){ // 브랜드는 체크했는데 시설 거리는 체크 안했을 경우

              console.log("브랜드 O, 시설 X, 거리 X");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=`+nowbrandvu+`&lefthandStatus=0&parkingStatus=0&groupseatStatus=0&floorscreenStatus=0&storageStatus=0&lessonStatus=0&distance=16`); 
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);
            }
          }
        } else if(nowbrandch==false){ //

          if(nowfacich==true){ //

            if(nowdisch==true){ // 시설 거리는 체크했는데 브랜드는 체크 안한 경우 -> 브랜드 체크 안했을 때 전체선택 처리 필요

              console.log("브랜드 X, 시설 O, 거리 O");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=1&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);

            } else if(nowdisch==false){ // 시설은 체크했는데 브랜드 거리는 체크 안했을 경우

              console.log("브랜드 X, 시설 O, 거리 X");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=1&lefthandStatus=`+nowfacivu[1]+`&parkingStatus=`+nowfacivu[2]+`&groupseatStatus=`+nowfacivu[3]+`&floorscreenStatus=`+nowfacivu[4]+`&storageStatus=`+nowfacivu[5]+`&lessonStatus=`+nowfacivu[6]+`&distance=16`);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);

            }
          } else if(nowfacich==false){

            if(nowdisch==true){ // 거리는 체크했는데 브랜드 시설은 체크 안한 경우

              console.log("브랜드 X, 시설 X, 거리 O");
              console.log("brandvalue: "+nowbrandvu);
              console.log("facivalue: "+nowfacivu);
              console.log("disvalue: "+ nowdisvu);
              const response = await axios.get(`stores/map/filter?userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1&brand=1&lefthandStatus=0&parkingStatus=0&groupseatStatus=0&floorscreenStatus=0&storageStatus=0&lessonStatus=0&distance=`+nowdisvu+``);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);
            }
             else if(nowdisch==false){ // 아무것도 체크 안한 경우

              console.log("아무것도체크안함");
              const response = await axios.get(`stores/map?storeName=&userLatitude=`+nowlati+`&userLongitude=`+nowlong+`&orderRule=1`);
              //console.log(response);
              console.log(response.data);
              //console.log(response.data.result);
              setData(response.data.result);
            }
          }
        }
        //console.log("DATA: "+data);
        //console.log("체크밸류 종료");
    } catch (e){
        setError(e);
        console.log(e);
    }
    setLoading(false);
      },[]);
  
  function draglistener(e){
    //console.log("네이버 map 드래그 리스너");
    onChange();
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
    //console.log("현재 지도의 중심 위도: "+bounds._lat); // 지도의 중심 위도
    //console.log("현재 지도의 중심 경도: "+bounds._lng); // 지도의 중심 경도
    setCenter({lat: bounds._lat, lng: bounds._lng});
    nowlati=bounds._lat;
    nowlong=bounds._lng;
    //console.log("center.lat: "+center.lat);
    //console.log("center.lng: "+center.lng);
    //console.log("now lati: "+nowlati);
    //console.log("now long: "+nowlong);
  }
  function drawMarkers(mk){
    let pos=new navermaps.LatLng(mk.storeLatitude, mk.storeLongitude)
    return(
      <Marker
        key={mk.storeIdx}
        position={new navermaps.LatLng(mk.storeLatitude, mk.storeLongitude)}
        animation={0}
        onClick={() => {
          naverMapRef.panTo(pos);
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

const Main = ( {history} ) => { 
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
    </S.Container>
    </>
  //Main  
  );
}

export default Main;