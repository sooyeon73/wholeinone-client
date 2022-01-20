import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"



export const InputBar = styled.input`
margin: 7px;
width:240px;
height:40px;
border: solid lightgrey 0px;
background-color:#eff0f1;
font-size:17px;
padding-left:10px;
::placeholder{
    font-size:14px;
    line-height:20px;
`

export const SubmitButton = styled.button`
width:325px;
height:45px;
border: solid lightgrey 0px;
background-color: #22a8a5;
color:white;
    font-weight:700;
    font-size: 13px;
margin:20px;

`


export const Form = styled.form`

`

export const LoginMenu = styled.div`
    padding-top:30px;    
    display: block;
    vertical-align:middle;
    text-align:left;
    margin: 0 auto;
    h1{

        display:inline-block;
        width:65px;
        color:black;
        font-weight: 500;
        margin-left:25px;
        padding: 0px;
        font-size:13.5px;
    }
    h3{
        padding-left:100px;
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





