import styled from "styled-components";
import { IoCall,IoGolf } from "react-icons/io5";
import {BsShareFill} from "react-icons/bs";
import {MdPlace} from "react-icons/md";
import { BiTime,BiDownload} from "react-icons/bi";
import {AiFillCreditCard} from "react-icons/ai";
import {GiGolfTee} from "react-icons/gi";

export const IconContainer =styled.div`

display:inline-block;
padding:22px;
width:120px;
h3{
    display:inline;
    font-size: 17px;
    font-weight: 500;
    margin:0;
    line-height:31px;
    color: #434343;

}
`
export const CallIcon = styled(IoCall)`
    width: 25px;
    height: 25px;
    padding: 6px;
    vertical-align:top;  
`


export const TimeIcon = styled(BiTime)`
width: 25px;
height: 25wpx;
padding: 6px;
vertical-align:middle;  
color: #434343;

`
export const GolfIcon = styled(GiGolfTee)`
width: 25px;
height: 25wpx;
padding: 6px;
vertical-align:middle;  
color: #434343;


`

export const ServiceIcon = styled(IoGolf)`
width: 25px;
height: 25wpx;
padding: 6px;
vertical-align:middle;  
color: #434343;


`
export const CardIcon = styled(AiFillCreditCard)`
width: 25px;
height: 25wpx;
padding: 6px;
vertical-align:middle;  
color: #434343;

`


export const PlaceIcon = styled(MdPlace)`
    width: 25px;
    height: 25wpx;
    padding: 6px;
    vertical-align:middle;  
    color: #434343;

`



export const ShareIcon = styled(BsShareFill)`
    width: 25px;
    height: 25px;
    padding: 6px;
    vertical-align:top;  
`

export const DownIcon = styled(BiDownload)`
width: 23px;
height: 23px;
padding: 0px 0px 5px 13px;
vertical-align:middle;  
color: #434343;


`
export const StoreInfo=styled.div`
padding:10px;

text-align:center;

h1{
    text-align:left;
    padding-left:10px;
    font-size: 17px;
    margin: 0px;
    font-weight: 800;
    line-height: 35px;
}
h4{   
    text-align:left;
    font-size: 15px;
    margin: 0px;
    font-weight: 500;
    line-height: 35px;

}
`
export const CostTable=styled.div`
display: block;     
padding:10px;
table{
    margin-bottom:5px;
    font-size:16px;
    font-weight:600;
    text-align:center;
    width:100%;
    border-collapse: collapse;
}
thead{
    font-size:15px;
    color: #434343;
    background:lightgrey;
}

th{
    border-bottom: 1px solid lightgrey;
    padding:4px;
    border-right: 1px solid lightgrey;
    font-weight:500;
    font-size:15px;
    h1{ font-weight:500;
        font-size:15px;}
}
th:nth-child(2){
    width:100px;
}
a{    
    font-size:14.5px;
    color: grey;
    width:60px;
    font-weight:400;
}
td{
    h1{ font-weight:500;
        font-size:15px;}
    padding:7px;
    border-bottom: 1px solid lightgray;
  }
`


export const CostTable2=styled.div`
display: block;     
padding:10px;
table{
    margin-bottom:5px;
    font-size:16px;
    font-weight:600;
    text-align:center;
    width:100%;
    border-collapse: collapse;
}
thead{
    font-size:15px;
    color: #434343;
    background:lightgrey;
}

th{
    border-bottom: 1px solid lightgrey;
    padding:4px;
    border-right: 1px solid lightgrey;
     font-weight:500;
    font-size:15px;

    h1{ font-weight:500;
        font-size:15px;}
}
th:nth-child(2){
    width:100px;
}


td:nth-child(1),a{    
    font-size:14.5px;
    color: grey;
    width:60px;
    font-weight:400;
}
td{
    padding:7px;
    border-bottom: 1px solid lightgray;
  }

`

export const StoreInfoTitle = styled.div`
text-align: center;

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
h3{
    font-size: 18px;
    font-weight: 500;
    margin:0px 10px 0px 0px;
    line-height:27px;
    color: black;

    display:inline;
    text-align:center;
}
a{color:red;}
`


export const ReserveButton = styled.div`
background: linear-gradient(to left ,#22A8A5, #62BAB8);

filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.30));
    position: fixed;
    
    bottom:0px;
    left: 50%;
    transform: translate(-50%, -50%);
    color:white;
    line-height: 55px;
    width: 300px;
    font-weight:700;
    height: 55px;
    font-size: 18.5px;
    text-align:center;
    display: inline-block;
    border-radius: 30px; 
`


export const LineBorder=styled.div`
border-top: 1px solid lightgrey;   
height:5px;
background-color:#E4E4E4;
border-bottom: 1px solid lightgrey;   


`
export const ServiceIconWrapper=styled.div`
white-space:nowrap;
 overflow:auto;
 padding:7px;
 text-align:left;
`
export const ServieIcon=styled.div`
display:inline-block;
width:60px;
height:60px;
border-radius:100%;
background: #e5e5e5;
margin:5px;
text-align:center;


line-height:56px;
h1{
    vertical-align:middle;
    padding:0px;
    display:inline-block;
    font-size: 14px;
    line-height:18px;
    font-weight: 700;
    margin:0;
    color: grey;
    text-align:center;
}

  
`
export const CouponContainer = styled.div`
    width: 340px;
    display:inline-block;
    border-radius:10px;
    border: 1.5px solid lightgrey;
    height: 50px;
    margin: 10px 0px 5px 0px;
    text-align:left;
    h1{
    font-size: 16px;
    font-weight: 600;
    margin:0px;
    padding:0px 0px 0px 20px;
    line-height:50px;
    display:inline-block;
    width:258px;
    }
    a{
        color:#22A8A5;
    }

`

export const Container = styled.div`
    width:100%;
`


export const StoreContainer = styled.div`
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