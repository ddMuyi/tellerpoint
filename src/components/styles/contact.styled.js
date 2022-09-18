import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:auto;
    z-index:3;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        height:100vh;
    }
`

export const ContactMiniContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    /* background-color:${({theme})=>theme.colors.light_primary}; */
    border-radius:20px;
    /* transition:0.2s ease; */
    z-index:3;
    flex-direction:column;
    padding:16px;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        flex-direction:row;
        background-color:#F5F8FF;
        /* transform:scale(0.9); */
    }

    @media(min-width:${({theme})=>theme.screen.laptop}){
        padding:2rem;
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        padding:5rem;
    }
`

export const LeftContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:50%
    }
`
export const RightContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    display: flex;
    justify-content: center;
    margin-top:42px;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:50%;
        justify-content: flex-end;
        margin-top:0px;
    }
`

export const RightMiniContainer = styled.div`
    width:100%;
    height:auto;
    overflow-y:hidden;
    position:relative;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:80%;
    }
`

export const RightInnerContainer = styled.div`
    width:100%;
    height:auto;
    overflow-y:hidden;
    position:relative;
    transition:1s ease;

    /* & > .firstImage {
        margin-top:42px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            margin-top:0px;
        }
    } */

    & > .firstIconRow {
        margin-top:42px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            margin-top:0px;
        }
    }

    & > .secondIconRow {
        transform:translateY(0px);
        transition:0.5s ease-in-out;
        margin-top:16px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            transform:translateY(500px);
        }
        @media(min-width:${({theme})=>theme.screen.laptopM}){
            margin-top:24px;
        }
    }
    & > .thirdIconRow {
        transform:translateY(0px);
        transition:0.5s ease-in-out;
        margin-top:16px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            transform:translateY(500px);
        }
        @media(min-width:${({theme})=>theme.screen.laptopM}){
            margin-top:24px;
        }
    }


`

export const ContactHeader = styled.header`
    display:inline-block;

    & > .intro {
        padding:10px 16px;
        color:${({theme})=>theme.colors.primary};
        background-color:${({theme})=>theme.colors.light_primary};
        display:inline-flex;
        align-items:center;
        gap:0.8rem;
        border-radius:999px;
        text-transform:uppercase;
        font-size:12px;
        font-weight:500;
        margin-bottom:24px;

        @media(min-width:${({theme})=>theme.screen.tablet}) {
            background-color:white;
        }

        @media(min-width:${({theme})=>theme.screen.laptopM}) {
            font-size:1rem;
        }
    }

    & > h2 {
        font-size:2rem;

        @media(min-width:${({theme})=>theme.screen.laptopM}) {
            font-size:3rem;
        }
    }

    & > .description {
        margin:24px 0;
        color:#555555;
        display:inline-flex;
        font-size:1rem;
        font-weight:500;
        line-height:2rem;

        @media(min-width:${({theme})=>theme.screen.laptopM}) {
            font-size:1.2rem;
        }
    }
`

export const OutsideGlow = styled.div`
    width:24px;
    height:24px;
    border-radius:999px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#DAE6FF;
`

export const InsideGlow = styled.div`
    width:12px;
    height:12px;
    border-radius:999px;
    background-color:${({theme})=>theme.colors.primary};
`

export const GlowContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    gap:8px;
    width:calc(50% - 12px);

    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:auto;
    }

    & > .p{
        font-size:14px;
        font-weight:500;
        color:#F5F8FF;

        @media(min-width:${({theme})=>theme.screen.laptopM}){
            font-size:16px;
        }
    }
`

export const ParentGlowContainer = styled.div`
    display:flex;
    gap:24px;
    flex-wrap:wrap;
    justify-content: start;
`

export const ContactButton = styled.button`
    width: auto;
    height:48px;
    font-weight:500;
    font-size:18px;
    background-color:${({theme})=>theme.colors.primary};
    color:white;
    margin-top:32px;
    border-radius:999px;
    border:none;
    padding:0 24px;
    display:flex;
    align-items:center;
    gap:16px;

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        font-size:24px;
        margin-top:42px;
        padding:0 32px;
        height:64px;
    }
`

export const RightImageCont = styled.div`
    width:100%;
    height:auto;
    position:relative;
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    gap:16px;

    @media(min-width:${({theme})=>theme.screen.laptop}){
        gap:24px;
    }
    /* background-color:yellow; */
`

export const RightImage = styled.img.attrs((props)=>({
    src:props.src
}))`
    width:100%;
    height:auto;
    display:block;
    margin-right:0px;
    margin-left:auto;
`

export const OtherRightImage = styled.img.attrs((props)=>({
    src:props.src
}))`
    max-width:calc(50% - 8px);
    height:auto;
    display:block;

    @media(min-width:${({theme})=>theme.screen.laptop}){
        max-width:calc(33.33% - 16px);
    }
`

export const Br = styled.br`
    display:none;
    @media(min-width:${({theme})=>theme.screen.tablet}){
        display:block;
    }
`

export const AestheticImage = styled.img.attrs((props)=>({
    src:props.src
}))`
    position:absolute;
    bottom:0;
    right:0;
    display:none;
    width:50%;

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        display:block;
    }
`