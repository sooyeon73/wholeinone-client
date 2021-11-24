import styled from "styled-components";


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

export const StoreContainer = styled.div`
    text-align: left;
    display: block;     
    padding:25px 25px 25px 25px;
    border-bottom: 1px solid lightgrey;   
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