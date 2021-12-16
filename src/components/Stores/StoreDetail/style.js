import styled from "styled-components";
import { IoCall } from "react-icons/io5";
import {BsShareFill} from "react-icons/bs"
export const IconContainer =styled.div`

display:inline-block;
padding:20px;
h3{
    display:inline;
    font-size: 17px;
    font-weight: 500;
    margin:0;
    line-height:31px;
    color: #434343;
    text-align:center;

}
`
export const CallIcon = styled(IoCall)`
    width: 25px;
    height: 25px;
    padding: 6px;
    vertical-align:top;  
    text-align: center;
`

export const ShareIcon = styled(BsShareFill)`
    width: 25px;
    height: 25px;
    padding: 6px;
    vertical-align:top;  
    text-align: center;
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

export const StoreInfoTitle = styled.div`
h1{
    padding-top:20px;
    font-size: 20px;
    font-weight: 700;
    margin:0;
    line-height:36px;
    text-align:center;
}
h2{
    font-size: 18px;
    font-weight: 500;
    margin:0;
    line-height:27px;
    color: grey;
    text-align:center;

}
a{color:red;}
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


export const StoreContainer = styled.div`
    text-align: center;
    display: block;     
    padding: 0px;
    border-bottom: 1px solid lightgrey;   
    img{
        height:240px;
        width: 100%;
        object-fit: cover;

        vertical-align:top;
    }
`