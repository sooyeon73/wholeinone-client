import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi"

export const Container = styled.div`
    width:100%;
`

export const Circlebutton = styled.div`
    border-width: 1;
    border-color: 'rgba(0,0,0,0.5)';
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 50;
    z-index: 10;
`

export const StoreContainer = styled.div`
    text-align: left;
    display: block;     
    padding:25px 25px 25px 25px;
    border-bottom: 1px solid lightgrey;   
    position: relative;
    z-index: 10;
    img{
        height:115px;
        width: 115px;
        object-fit: cover;
        border-radius: 5px;
        vertical-align:top;
    }
`

export const TextWrapper = styled.div`
    display: inline-block;
    padding-left:15px;
    vertical-align: top;
    min-width: 220px;
    max-width: 800px;
    height: 110px;
    line-height:1.6em;
    position: absolute;
    z-index: 10;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    h1{
        max-width:200px;
        font-size: 1.2em;
        font-weight: 700;
        margin: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    h2{
        font-size: 1em;
        color:grey;
        margin: 0px;
        font-weight: 400;
    }
    span{
        font-size: 1em;
        display:inline;
        font-weight: 600;

    }
    h3{
        position: absolute;
        right:55px;
        font-weight: 400;
        font-size: 1em;
        margin:0px;
    }
    a{
        color: red;
    }

    h4{
        color: white;
        width: auto;
        font-size: 14px;
        text-align:center;
        border-radius: 4px; 
        display: inline-block;
        background-color:#22a8a5;
        margin-top:0px;
        margin-bottom:5px;
        margin-right:5px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    h5{
        color: white;
        width: auto;
        font-size: 14px;
        text-align:center;
        display: inline-block;
        border-radius: 4px; 
        background-color: #f7766d;
        margin-top:0px;
        margin-bottom:5px;
        margin-right:5px;
        padding-left: 10px;
        padding-right: 10px;
    }

`