import styled from "styled-components";
import { RiCheckboxCircleLine ,RiCheckboxCircleFill } from "react-icons/ri";

export const InputBar = styled.textarea`
margin:10px;
width:270px;
height:80px;
// rows="3";
border: solid lightgrey 0.5px;
border-radius: 5px;
font-size:17px;
padding-left:10px;
::placeholder{
    font-size:15px;
    line-height:20px;
`

export const UnCheckedIcon = styled(RiCheckboxCircleLine)`
    width: 20px;
    height: 20px;
    color:#22a8a5;
    padding: 8px 8px 8px 0px;
    vertical-align:top;

    
`

export const CheckedIcon = styled(RiCheckboxCircleFill)`
    width: 20px;
    height: 20px;
    color: grey;
    padding: 8px 8px 8px 0px;
    vertical-align:top;

    
`
export const ReserveStatusContainer=styled.div`
text-align: left;
display: block;     
padding:15px 25px 20px 25px;

h3{
    color:#424242;
    font-weight: 400;
    font-size: 0.8em;
    margin:0px 0px 0px 28px;
    line-height:20px;
    
}
`

export const ReserveStatusTitle = styled.div`
h1{
    font-size: 15.5px;
    font-weight: 700;
    margin:0;
    line-height:36px;
    color: #22a8a5;
}
h2{
    font-size: 15.5px;
    font-weight: 700;
    margin:0;
    line-height:36px;
    color: grey;

}
`

export const LineBorder=styled.div`
border-top: 1px solid lightgrey;   
height:5px;
background-color:#E4E4E4;
border-bottom: 1px solid lightgrey;   


`

export const ReserveDetailContainer = styled.div`
padding:30px 25px 3px 35px;
text-align:left;
h1{
    line-height:12px;
    font-size: 18px;
    font-weight: 700;
    margin:0px;
}
`
export const ReserveDetailTitle=styled.div`
display:inline-block;

width: ${props => props.width};
text-align:${props => props.pos || 'left'};

padding: 20px 0px; 0px; 0px;
h1{
    font-size: 15.5px;
    font-weight: 500;
    margin:0px;
    line-height:37px;
}
h2{
    font-size: 18px;
    margin: 0px;
    font-weight: 700;
    line-height: 45px;

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
`