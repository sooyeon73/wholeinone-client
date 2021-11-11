import React from "react";
import * as S from './style';

import Burger from '../Burger/Burger';

const Main = ( {history} ) => {
  console.log(history);
  return (
    <S.Container>
      <Burger/>
    </S.Container>
  //Main  
  );
}

export default Main;