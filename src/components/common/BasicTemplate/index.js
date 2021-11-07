import React from "react";
import * as S from './style';


const BasicTemplate = ( {children} ) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default BasicTemplate;