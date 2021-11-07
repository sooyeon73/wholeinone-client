import styled from "styled-components";
import { IoChevronBackSharp } from "react-icons/io5"

export const BackButton = styled(IoChevronBackSharp)`
    width: 30px;
    height: 40px;
    display: block;
    padding: 20px 0px 5px 20px;

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
    `
export const StoreContainer = styled.div`
    padding:20px 20px 20px 20px;
    border-bottom: 1px solid lightgrey;
`;

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
        bottom:10px;
        right:15px;
        font-weight: 700;
        font-size: 1.3em;
        margin:0px;
    }

    h4{
        color: white;
        width:95px;
        font-size: 14px;
        text-align:center;
        border-radius: 4px; 
        display: inline-block;
        background-color: #379FFF;
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
        background-color: #FF974D;
        margin-top:0px;
        margin-bottom:5px;
        margin-right:5px;
    }

`

export const ImageWrapper = styled.div`
    text-align: left;
    display: block;        
    img{
        height:115px;
        width: 115px;
        object-fit: cover;
        border-radius: 5px;
        vertical-align:top;
    }
   
`

export const Container = styled.div`
    width:100%;
`