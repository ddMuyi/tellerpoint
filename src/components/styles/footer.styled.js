import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: auto;
    height: auto;
    background:#555555;
    color:#AAAAAA;
    padding-top:60px;
    padding-bottom:60px;
    position:relative;
    overflow:hidden;
    z-index:1;
`

export const FooterInnerContainer = styled.div`
    width:90%;
    height: auto;
    margin:0 auto;
    & > h3, p, a {
        color: #AAAAAA;
    }

    & > a {
        text-decoration:none;
        font-weight:500;
        font-size:25px;
        margin-top:38px;
        display:block;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:32px;
        }
    }

    & > h3 {
        font-size:1.5rem;
    }

    & > p {
        line-height:36px;
        font-size:16px;
        margin-top:24px;
        font-weight:500;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:18px;
        }
    }
`

export const LogoImg = styled.img.attrs((props)=>({
    src:props.src,
    alt:props.alt
}))`
    display:block;
    height: auto;
    width: auto;
`

export const Br = styled.br`
    display:none;
    @media(min-width:${({theme})=>theme.screen.tablet}){
        display:block;
    }
`

export const AestheticContainer = styled.div`
    @mixin grayscale($value) {
        filter: #{"grayscale(" + $value + ")"};
    }
    position:absolute;
    right:0px;
    top:0px;
    width:50%;
    height:100%;
    display:none;

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        display:block;
    }
`

export const Aesthetic = styled.img.attrs((props)=>({
    src:props.src,
    alt:props.alt
}))`
    width:100%;
    height:100%;
    filter:grayscale(100%);
    display:block;
    transform:scale(1.4);
`