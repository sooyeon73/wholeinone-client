import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 812px;
    top: 0;
    left: 0;
    background-size: cover;
`

export const MarkClickConatiner = styled.div`
    width:100%;
    height: 812px;
    top: 0;
    left: 0;
    background-size: cover;
    background-color: white;
`

const move = keyframes`
    from{
        transform: translate(-50%, 0%);
    }
    to{
        transform: translate(-50%, -50%);
    }
`

export const Briefinfo = styled.div`
    position: absolute;
    width:90%;
    height: 250px;
    left:50%;
    bottom:0px;
    transform: translate(-50%, -50%);
    animation: ${move} 1s linear;
    display: flex;
    justify-content: center;
    align-items: center ;
    z-index: 10;
    background-color: white;
    border-radius: 15px;
`

export const StoreContainer = styled.div`
    text-align: left;
    display: block;
    position: absolute;
    width: 90%;
    left:50%;
    bottom:20px;
    transform: translate(-50%, -50%);
    margin: 0;
    border-radius: 15px;
    padding:25px 25px 25px 25px;
    border-bottom: 1px solid lightgrey;   
    background-color: white;
    z-index: 10;
    box-shadow: 0px 0px 5px #bbbbbb ;
    img{
        height:100px;
        width: 100px;
        object-fit: cover;
        border-radius: 5px;
        vertical-align:top;
    }
`

export const TextWrapper = styled.div`
    display: inline-block;
    padding-left:15px;
    vertical-align: top;
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
        position: fixed;
        right: 30px;
        font-weight: 400;
        font-size: 1em;
        margin:0px;
        float: right;
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