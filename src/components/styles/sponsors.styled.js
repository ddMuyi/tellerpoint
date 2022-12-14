import styled from 'styled-components'

export const SponsorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:auto;
    z-index:1;
    position:relative;
    padding-top:100px;
    padding-bottom:100px;

    @media(min-width:${({theme})=>theme.screen.laptop}){
        padding:100px 0;
    }
`

export const SponsorMiniContainer = styled.div`
    width:100%;
    height:100%;
    /* background-color:white; */
    border-radius:20px;
    padding:8px;
    transform:scale(0.9);
    transition:0.5s ease;
    z-index:1;
    position:relative;

    @media(min-width:${({theme})=>theme.screen.laptopM}){
    }
`

export const SponsorHeader = styled.header`
    text-align:center;
    position:relative;
    z-index:1;

    & > p {
        font-size:0.8rem;
        font-weight:500;
        color:#555555;
        margin-top:24px;
        line-height:2rem;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:1rem;
        }

        @media(min-width:${({theme})=>theme.screen.desktop}){
            font-size:1.5rem;
        }
    }

    & > h3{
        font-size:1.2rem;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:1.25rem;
        }

        @media(min-width:${({theme})=>theme.screen.laptopM}) {
            font-size:3rem;
        }
        /* @media(min-width:${({theme})=>theme.screen.desktop}){
            font-size:4rem
        } */
    }
`

export const SponsorsLogosCont = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: auto;
    height: auto;
    gap:20px;
    justify-content: center;
`

export const SponsorsLogo = styled.img.attrs((props)=>({
    src: props.src
}))`
    display:block;
    width:auto;
    height: auto;
    filter:opacity(50%);
`

export const Br = styled.br`
    display:none;
    @media(min-width:${({theme})=>theme.screen.tablet}){
        display:block;
    }
`