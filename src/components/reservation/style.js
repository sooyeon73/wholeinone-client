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

export const StoreinfoContainer = styled.div`
    display: block;     
    padding: 0px;
    //border-bottom: 1px solid lightgrey;   
    img{
        height:240px;
        width: 100%;
        object-fit: cover;

        vertical-align:top;
    }
`

export const LineBorder=styled.div`
border-top: 1px solid lightgrey;   
height:5px;
background-color:#E4E4E4;
border-bottom: 1px solid lightgrey;   
`

export const SelectReservationinfo = styled.div`
    display: block;     
    padding: 0px;
    //border-bottom: 1px solid lightgrey;   
    img{
        height:240px;
        width: 100%;
        object-fit: cover;

        vertical-align:top;
    }

`