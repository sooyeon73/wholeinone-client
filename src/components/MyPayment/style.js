import styled from "styled-components";


export const DeleteButton = styled.div`
padding:5px;
width:55px;
height:28px;
position:absolute;
right:25px;
top:40px;
display:inline-block;
border:1px solid lightgrey;
border-radius: 10px; 
text-align:center;
    line-height:24px;
    font-size: 16px;
    color:grey;
    font-weight: 600;
    vertical-align:center;  

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
export const RadioButton = styled.input`
  
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 10px;
  display: inline;

`;
export const Card=styled.div`
height:75px;
position:relative;

border-bottom: 1px solid lightgrey;   

padding: 22px;
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

export const ReserveCancelButton=styled.div`
  
    width:85%;
    height: 40px;
    line-height:40px;
    font-size: 15px;
    text-align:center;
    border-radius: 9px; 
    border: 1px solid grey;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom:10px;
`


export const Container = styled.div`
    width:100%;
    text-align:left;

`