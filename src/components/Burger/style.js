import styled from "styled-components";

export const Container = styled.div`
    width:100%;
`

export const ImageWrapper = styled.div`
    text-align: left;
    display: block;        
    img{
        height:4rem;
        width: 4rem;
        object-fit: cover;
        border-radius: 5px;
        vertical-align:top;
    }
`

export const TextWrapper = styled.div`
    display: inline-block;
    width:100%;
    padding-left:15px;
    vertical-align: top;
    height: 66px;
    line-height:4em;
    position: absolute;
    justify-content: center;

    h1{
        font-size: 1.2em;
        font-weight: 700;
        margin:0px;
    }
`