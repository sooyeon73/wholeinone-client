import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5"

export const BackButton = styled(IoChevronBackSharp)`
    width: 30px;
    height: 40px;
    display: block;
    padding: 20px 0px 5px 20px;

`

export const LocationIcon = styled(IoLocationSharp)`
    width: 30px;
    height: 40px;
    display: block;
    padding: 20px 0px 5px 20px;

`

export const LocationList = styled.div`
    li{
        list-style: none;
    }
    .loc_t1{
        display: block;
        margin: 1rem;
    } 
    .locIcon{
        display: block;
        float: left;
        margin-top: -1rem;
    }
    .loc1{
        display: block;
        text-align: left;
        font-size: 1.2rem;
        margin-left: 3rem;
    }
    .loc2{
        color: rgba(128,128,128,1);
        display: block;
        float: left;
        text-align: left;
        font-size:0.8rem;
        margin-left: 1rem;
    }
    .loc3{
        color: rgba(128,128,128,1);
        display: block;
        float: right;
        text-align: right;
        font-size:0.8rem;
        margin-right: 1rem;
        float: none;
    }
    .loc_t2{
        display: block;
        margin: 1rem;
        margin-left: 2rem;
        margin-bottom: 2rem;
    } 
    .loc4{
        text-align: left;
        font-size: 1.2rem;
        margin-left: 5rem;
    }
    .loc5{
        color: rgba(128,128,128,1);
        text-align: left;
        font-size: 1rem;
        margin-left: 5rem;
    }
    .loc6{
        color: rgba(128,128,128,1);
        display: block;
        float:left;
        text-align: left;
        font-size:0.8rem;
        margin-left: 1rem;
    }
    .loc7{
        color: rgba(128,128,128,1);
        display: block;
        float: right;
        text-align: right;
        font-size:0.8rem;
        margin-right: 1rem;
        float: none;
    }
`

export const Header = styled.div`
    border-bottom: 2px solid  lightgrey;
    margin: 0px 20px 0 20px;
    display:block;
    h1{
        font-size: 1.3em;
        font-weight:bold;
        text-align: left;
        padding: 0px 0px 10px 20px;
    }
    input{
        outline: none;
        display: flex;
        font-size: 1.3em;
        font-weight: bold;
        width: 100%;
        border-width: 0;
        box-sizing:border-box;
        margin-top: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: flex;
    }
`

export const TextWrapper = styled.div`
    display: inline-block;
    width:210px;//
    padding-left:15px;
    vertical-align: top;
    height: 110px;
    line-height:1.6em;
    position: absolute;

    h1{
        font-size: 1.2em;
        font-weight: 700;
        margin:0px;
    }
    h2{
        font-size: 1em;
        color:grey;
        margin: 0px;
        font-weight: 400;
    }
    h3{
        position: absolute;
        bottom: 5px;
        right:18px;
        font-weight: 700;
        font-size: 18px;
        margin:0px;
    }

    h4{
        color: white;
        width:95px;
        font-size: 14px;
        text-align:center;
        border-radius: 4px; 
        display: inline-block;
        background-color:#22a8a5;
        margin-top:0px;
        margin-bottom:5px;
        margin-right:5px;
    }
    
    h5{
        color: white;
        width:95px;
        font-size: 14px;
        text-align:center;
        display: inline-block;
        border-radius: 4px; 
        background-color: #f7766d;
        margin-top:0px;
        margin-bottom:5px;
        margin-right:5px;
    }

`

export const ImageWrapper = styled.div`
    text-align: left;
    display: block;
    float: left;
    margin-left: 2rem;
    img{
        height:4rem;
        width: 4rem;
        object-fit: cover;
        border-radius: 10px;
        vertical-align:top;
    }
`

export const Container = styled.div`
    width:100%;
`