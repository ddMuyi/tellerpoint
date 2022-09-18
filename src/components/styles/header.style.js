import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding:2rem;
    position:relative;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        padding-left:16px;
        padding-right:16px;
    }
    @media(min-width:${({theme})=>theme.screen.laptop}) {
        padding-left:2rem;
        padding-right:2rem;
    }
    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        padding-left:0px;
        padding-right:0px;
        width:90%;
        margin:0px auto;
    }
    @media(min-width:${({theme})=>theme.screen.desktop}) {
        padding-left:0px;
        padding-right:0px;
        width:80%;
        margin:0px auto;
    }
`

export const BurgerButton = styled.p`
    width:45px;
    height:45px;
    color:#1C1B1F;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:40px;
    cursor:pointer;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        display:none;
    }
`

export const Links = styled.a`
    text-decoration:none;
    font-weight:600;

    &:hover {
        color:${({theme})=>theme.colors.primary};
    }

    @media(max-width:${({theme})=>theme.screen.tablet}){
        border-bottom:1px solid #DAE6FF;
        padding:2rem;
    }
`

export const Logo = styled.img.attrs(props=>({
    src:props.Img
}))`
    width:auto;
    height:auto;
    display:block;
`

export const Nav = styled.nav`
    display:flex;
    width:auto;
    gap:3rem;
    text-transform:uppercase;

    @media(max-width:${({theme})=>theme.screen.tablet}) {
        display:none;
    }
`

export const ExtendedNav = styled.nav`
    width:100%;
    height:calc(100vh - 100px);
    text-transform:uppercase;
    position:absolute;
    top:100px;
    left:0px;
    display:flex;
    flex-direction:column;
    padding:24px 16px;
    z-index:10;
    background-color:white;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        display:none;
    }
`

