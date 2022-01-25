import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"



export const InputBar = styled.input`
margin:10px;
width:290px;
height:40px;
border: solid lightgrey 0.5px;
border-radius: 5px;
font-size:17px;
padding-left:10px;
::placeholder{
    font-size:15px;
    line-height:20px;
`

export const LoginButton = styled.button`
width:300px;
height:45px;
border: solid lightgrey 0.5px;
background-color: #22a8a5;
color:white;
border-radius: 5px;
    font-weight:700;
    font-size: 13px;
margin:10px;

`

export const SignUpButton = styled.button`
width:300px;
height:45px;
border: solid  #22a8a5 1px;
background-color: white;
color:#22a8a5;
border-radius: 5px;
    font-weight:700;
    font-size: 13px;

`

export const Form = styled.form`

`

export const LoginMenu = styled.div`
    padding-top:30px;    
    display: block;
    vertical-align:middle;
    margin: 0 auto;

    h1{
        color:black;
        font-weight: 500;
        margin: 0px;
        padding: 0px;
        font-size:15px;
        line-height:27px;
    }
    h2{
        color: grey;
        display: inline-block;
        margin: 5px;
        padding: 0px;
        font-size:13px;
        font-weight: 700;
    }
   
    h3{
        text-align:left;
        padding-left:40px;
        display:block;
        margin:0px;
        line-height:20px;
        color:red;
        font-size:13px;
    }
`

export const Container = styled.div`
    width:100%;
    height:100%;
    vertical-align:middle;
    text-align:center;

`





