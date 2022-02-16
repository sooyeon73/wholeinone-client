import styled from "styled-components";
import { RiCheckboxCircleLine ,RiCheckboxCircleFill } from "react-icons/ri";


export const ReserveStatusContainer=styled.div`
text-align: left;
display: block;     
padding:30px 30px 30px 35px;

h3{
    color:#424242;
    font-weight: 400;
    font-size: 0.8em;
    margin:0px 0px 0px 28px;
    
}
h1{
    font-size: 15.5px;
    font-weight: 700;
    line-height:20px;

    margin:0;
    line-height:45px;
    display:inline-block;
    width:110px;
}
h2{
    font-size: 15.5px;
    font-weight: 700;
    margin:0;
    padding-left:20px;
    line-height:33px;
    display:inline-block;
    width:185px;
    background:#E2E2E2;
    color: #4b4b4b;
    border-radius: 30px; 

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
h3{
    line-height:35px;
    font-size: 14px;
    margin:0px;
    font-weight:500;


}
`
export const ReserveDetailTitle=styled.div`
display:inline-block;

width: ${props => props.width};
text-align:${props => props.pos || 'left'};
padding: 20px 0px; 
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


export const Container = styled.div`
    width:100%;
`


export const InputBar = styled.input`
width:290px;
height:40px;
border: solid grey 1px;
font-size:15px;
padding-left:10px;

`

export const DropDown = styled.select`
  width: 310px;
  height:40px;
  margin:0px 0px 10px 0px;
  display: block;
  font-size:15px;
  color: grey;
  border:0px;
  background: white;
    border: 1px solid grey;
option{
  font-size:11px;
}
 
 `;

export const RadioButton = styled.input`
  
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 10px;
  display: inline;

`;
export const Footer = styled.div`
    position: fixed;
    display: block;
    bottom: 0px;
    padding: 0px;
    width: 100%;
    height: 130px;
    background-color: white;
    box-shadow: 0px 7px 15px 2px gray;

    //border-bottom: 1px solid lightgrey;
    //filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.30));
`

export const ReserveButton = styled.div`
background: linear-gradient(to left ,#22A8A5, #62BAB8);
filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.30));
    position: fixed;
    
    bottom:10px;
    left: 50%;
    transform: translate(-20%, -50%);
    color:white;
    line-height: 55px;
    width: 200px;
    font-weight:700;
    height: 55px;
    font-size: 18.5px;
    text-align:center;
    display: inline-block;
    border-radius: 30px; 
`

export const PaymentContainer = styled.div`
    position: fixed;
    bottom:30px;
    left: 2%;
    line-height: 10px;
    width: 150px;
    font-weight:700;
    text-align:center;
    display: inline-block;
    h3{
        color: gray;
    }
`



export const IsMain = styled.div`
padding:5px;
margin-left:7px;
width:47px;
height:10px;
display:inline-block;
border:1px solid lightgrey;
border-radius: 20px; 
text-align:center;
    line-height:12px;
    font-size: 12px;
    color:grey;
    font-weight: 600;

`
export const Card=styled.div`
position:relative;
border: 1px solid lightgrey;   
padding: 15px;
`
export const CardInfoContainer=styled.div`
display:inline-block;
h1{
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin:10px 5px 5px 45px;
}
h2{
    display: inline;
    font-size: 18px;
    margin: 5px;
    font-weight: 700;
}
h3{
    display: inline;
    font-size: 14.5px;
    margin: 5px;
    color:grey;
    font-weight: 600;
}
`