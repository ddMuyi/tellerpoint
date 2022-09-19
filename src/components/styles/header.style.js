import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    position:relative;
    padding:1rem;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        padding:2rem;
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

export const BurgerButton = styled.div`
    width:45px;
    height:45px;
    color:#1C1B1F;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    font-size:40px;
    cursor:pointer;
    margin-top:-10px;

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
    width:150px;
    height:auto;
    display:block;
    animation:zoom 2s ease-in-out infinite;

    @keyframes zoom {
        0%{transform:scale(0.98)}   
        50%{transform:scale(1)}   
        100%{transform:scale(0.98)}   
    }

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        width:200px;
    }
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
    height:calc(100vh - 50px);
    text-transform:uppercase;
    position:absolute;
    top:50px;
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

