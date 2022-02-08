import styled from "styled-components";
import { RiCheckboxCircleLine ,RiCheckboxCircleFill } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

export const UnCheckedIcon = styled(RiCheckboxCircleLine)`
    width: 17px;
    height: 17px;
    color:white;
    padding:2px;
    vertical-align:top;

    
`

export const CheckedIcon = styled(RiCheckboxCircleFill)`
    width: 20px;
    height: 20px;
    color: grey;
    padding: 8px 8px 8px 0px;
    vertical-align:top;

    
`

export const DetailLinkIcon = styled(FiChevronRight)`
    width: 30px;
    height: 30px;
    padding: 13px;
    position:absolute;
    right:10px;
 
    
`
export const TextWrapper = styled.div`
    display: inline-block;
    padding: 0px 5px 5px 15px;
    height: 85px;
    line-height:29px;

    h1{
        font-size: 19px;
        font-weight: 700;
        margin:0px;
    }
    h2{
        font-size: 17px;
        margin: 0px;
        font-weight: 500;
    }
    h3{
        color:#424242;
        font-weight: 400;
        font-size: 0.8em;
        margin:0px;
    }
`
export const ReserveStatusTitle = styled.div`

h2{
    color: white;
    width:92px;
    height: 23px;
    line-height:23px;
    font-size: 15px;
    text-align:center;
    display: inline-block;
    border-radius: 4px; 
    background-color:gray;
    margin-top:0px;
    margin-bottom:5px;
    margin-right:5px;

}
margin: 5px 0px 2.5px 15px;
h1{
    color: white;
    width:92px;
    height: 23px;
    line-height:23px;
    font-size: 15px;
    text-align:center;
    display: inline-block;
    border-radius: 4px; 
    background-color: #22a8a5;
    margin-top:0px;
    margin-bottom:5px;
    margin-right:5px;
}

`

export const ReserveContainer = styled.div`
    text-align: left;
    display: block;     
    padding:25px 25px 25px 25px;
    border-bottom: 1px solid lightgrey;
    `

export const Container = styled.div`
    width:100%;
    position:relative; // 오른쪽 icon 위치 설정을 위해

`
export const ButtonContainer = styled.div`
width:100%;
text-align:center;
`

export const LastIndex = styled.div`
height:30px;

`
export const ReviewButton=styled.div`
  
    width:152px;
    height: 35px;
    margin:10px 5px 0px 5px;
    line-height:35px;
    font-size: 14px;
    text-align:center;
    display: inline-block;
    border-radius: 6px; 
    border: 1px solid gray;
`