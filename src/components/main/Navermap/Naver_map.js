import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './style.css';
import * as S from "./style";

import { NaverMap, Marker } from 'react-naver-maps';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

function Naver_maps({open}) {
 
    return (
      <S.Container>
        <RenderAfterNavermapsLoaded
          ncpClientId={'m3c5d30dn7'}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
          >
          <NaverMap
            id="react-naver-maps-introduction"
            style={{ width: '100%', height: '100vh' }}
            center={{ lat: 37.497175, lng: 127.027926 }}
          >
          </NaverMap>
        </RenderAfterNavermapsLoaded>
      </S.Container>
    );
  }
  
  export default Naver_maps;