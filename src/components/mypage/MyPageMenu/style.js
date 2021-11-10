import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"



export const UserWrapper = styled.div`
    text-align: left;
    display: block;
    padding: 15px 40px 15px 40px;
    img{
        height:65px;
        width: 65px;
        object-fit: cover;
        border-radius: 10px;
        vertical-align: middle;
    }
    h3{
        display: inline-block;
        padding: 25px;
        margin: 0px;
    }
   
`

export const Menu = styled.div`
    padding:13px;    
    display: block;

    table{
    background-color: #F3F3F3;
    width:300px;
    border-collapse: collapse;
    margin: auto;    
    box-shadow: 0 0 0 1px #A0A0A0;
    border-style: hidden;
    border-radius:15px;
    table-layout: fixed;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.18));
}

    th,tr{
        text-align: center;
        border: 1px solid #A0A0A0;
        height:85px;   
    }

    h4{
        color:black;
        font-weight: 900;
        display: inline;
        margin: 0px;
        padding: 0px;
        font-size:17px;
        line-height:27px;
    }
    h5{
        color: #22a8a5;
        display: inline-block;
        margin: 0px;
        padding: 0px;
        font-size:16px;
        font-weight: 700;
        line-height:27px;
    }
   
`

export const Container = styled.div`
    width:100%;
`


export const MenuBar = styled.ul`
    list-style: none;
  
    display:block;
    margin:10px 40px 10px 40px;
    padding:0px;
    font-size: 17px;
    font-weight:bold;
    text-align: left;
    line-height:46px;
`


export const AdContainer = styled.div`  
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.18));
    position: relative;
    left: 0; right: 0; 
    margin-top:40px;
    img{
        height:110px;
        width: 340px;
        object-fit: cover;
        border-radius: 8px;
    }
`
