import styled from "styled-components";
import {FaStar} from "react-icons/fa"
export const Star = styled(FaStar)`
    width: 43px;
    height: 43px;
    color:#22a8a5;
    padding: 8px;

`
export const Rating = styled.div`
width: 100%;
margin:40px 0px 40px 0px;
    & svg {
        color: #c7c7c7;
        cursor: pointer;
    }

    & :hover svg {
        color: rgb(212, 180, 0);
    }
  
    & svg:hover~svg {
        color: #c7c7c7;
    }
  }
  `
export const ReserveCancelButton=styled.div`
  
    width:85%;
    height: 40px;
    line-height:40px;
    font-size: 15px;
    text-align:center;
    display: inline-block;
    border-radius: 9px; 
    border: 1px solid grey;
`


export const Container = styled.div`
    width:100%;
    h1{
        font-size: 17px;
        font-weight: 600;
        margin: 50px 0px 30px 0px;
    }
`