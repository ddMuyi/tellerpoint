import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding:2rem;
    position:relative;

    @media(max-width:${({theme})=>theme.screen.tablet}) {
        padding:0.5rem 1rem;
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

