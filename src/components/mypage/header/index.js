import React from "react";
import * as S from "./style";

const Header = ( {history,title}) =>{
    const goBack= ()=>{
        history.goBack()
    }
    return(
   <S.Container>
       <S.BackButton onClick={goBack} />
        <S.Header>
            <h1>{title}</h1>
        </S.Header>
        </ S.Container>

    );
}

export default Header;
