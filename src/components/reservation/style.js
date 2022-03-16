import styled from "styled-components";
import { IoCall,IoGolf } from "react-icons/io5";
import {BsShareFill} from "react-icons/bs";
import {MdPlace} from "react-icons/md";
import { BiTime} from "react-icons/bi";
import {AiFillCreditCard} from "react-icons/ai";
import {GiGolfTee} from "react-icons/gi";

export const Container = styled.div`
    width:100%;
`

export const InputBar = styled.textarea`
margin-left: 1rem;
margin-right: 1rem;
padding: 7px;
width: 330px;
height:40px;
border: solid lightgrey 0px;
background-color:#eff0f1;
font-size:17px;
padding-left:10px;
::placeholder{
    font-size:14px;
    line-height:20px;
`

export const StoreinfoContainer = styled.div`
    display: block;     
    padding: 0px;
    justify-content: left;
    //border-bottom: 1px solid lightgrey;
    h3{
        text-align: left;
        margin-left: 2rem;
    }
`

export const LineBorder=styled.div`
border-top: 1px solid lightgrey;   
height:5px;
background-color:#E4E4E4;
border-bottom: 1px solid lightgrey;   
`

export const SelectReservationinfo1 = styled.div`
    display: block;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    h3{
        text-align: left;
        margin-left: 2rem;
    }
`
export const SelectRoomInfo= styled.div`
    display: block;
    margin-bottom: 5px;
    padding-bottom: 5px;
    h3{
        text-align: left;
        margin-left: 2rem;
    }
    
    h4 {
        text-align: left;
        margin-left: 2rem;
        margin-bottom: 5px;
    }
`
export const HallButton = styled.button`
    
    background-color: hotpink;
`

export const RadioButton = styled.input`
  
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 10px;
  display: inline;
`;

export const DatePickerContainer = styled.div`
    display: block;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`
export const PickerContainer = styled.div`
    -ms-overflow-style: none;
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 65px;
    width: 343px;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar{ 
        height:10px;
    }
    &::-webkit-scrollbar-thumb{ 
        background-color: #22A8A5;
    }
    &::-webkit-scrollbar-track{ 
        background-color: #d3eced;
    }
`

export const SelectReservationinfo2 = styled.div`
    display: block;
    padding: 0px;
`

export const Info2SelectContainer = styled.div`
    display: block;     
    padding: 0px;
    //border-bottom: 1px solid lightgrey;
    h3{
        text-align: left;
        margin-left: 2rem;
    }
`

export const Info2Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px;
    margin-left: 1rem;
    //border-bottom: 1px solid lightgrey;
    h3{
        text-align: left;
        margin-left: 2rem;
    }
`

export const Info2TitleContainer = styled.div`
    display: flex;
    padding: 0px;
    width: 150px;
    justify-content: space-between;
    //border-bottom: 1px solid lightgrey;
    h3{
        text-align: left;
        margin-left: 1rem;
    }
`

export const OneLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    padding: 0px;
    align-items: center;
    margin-right: 3rem;
    //border-bottom: 1px solid lightgrey;
    h3{
        text-align: left;
        margin-left: 2rem;
        margin-right: 2rem;
    }
`

export const Footer = styled.div`
    position: fixed;
    display: block;
    bottom: 0px;
    padding: 0px;
    width: 100%;
    height: 130px;
    background-color: white;
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