import React from "react";
import * as S from './style';

import Burger from '../Burger/Burger';
import Mainbuttons from '../MainButtons/Mainbuttons';

const Main = ( {history} ) => {
  console.log(history);
  return (
    <S.Container>
      <Burger/>
      <Mainbuttons/>
    </S.Container>
  //Main  
  );
}

export default Main;