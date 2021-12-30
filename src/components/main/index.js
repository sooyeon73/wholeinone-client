import React from "react";
import * as S from './style';

import Burger from '../Burger/Burger';
import Mainbuttons from '../MainButtons/Mainbuttons';

import Naver_maps from './Navermap/Naver_map';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

function NaverMapComponent() {
  return (
    <div style={{
      zindex: '-999',
    }}>
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '0px',
        zindex: '-999',
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={10}
    />
    </div>
  );
}

const Main = ( {history} ) => {
  console.log(history);
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
      <Mainbuttons/>
    </S.Container>
    </>
  //Main  
  );
}

export default Main;