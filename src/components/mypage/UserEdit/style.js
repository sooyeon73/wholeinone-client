import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"



export const UserWrapper = styled.div`
    text-align: center;
    display: block;
    padding:0px 0px 20px 0px;
    img{
        height:200px;
        width: 200px;
        object-fit: cover;
        border-radius: 10px;
        vertical-align: middle;
        border: 1px solid #A0A0A0;

    }
    
    `
    export const FileBox = styled.div`
    height:50px;
    margin:15px;
    input[type="file"] { 
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0; 
        margin: -1px; 
        overflow: hidden; 
        clip:rect(0,0,0,0); 
        border: 0; }

        label{
            width:200px;
            height: 35px;
            line-height:35px;
            font-size: 14px;
            text-align:center;
            display: inline-block;
            border-radius: 7px; 
            border: 1px solid #A0A0A0;

        }
    `
export const InputBar = styled.input`
margin: 7px 7px 15px 7px;
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
    h3{
        margin: 35px;
    }

`





