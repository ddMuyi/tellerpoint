import styled from "styled-components";

export const BusinessContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:auto;
    z-index:2;
    position:relative;
    background-color:white;
    margin-top:100px;

    @media(min-width:${({theme})=>theme.screen.tablet}){
        margin-top:200px;
        height:100vh;
    }
`

export const BusinessMiniContainer = styled.div`
    height:100%;
    display: flex;
    flex-direction:column;
    /* background-color:white; */
    border-radius:20px;
    padding:16px;
    transition:0.5s ease;
    /* z-index:2; */

    @media(min-width:${({theme})=>theme.screen.tablet}){
        flex-direction:row;
        transform:scale(0.9);
    }

    @media(min-width:${({theme})=>theme.screen.laptop}){
        padding:2rem;
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        padding:3rem;
    }
`

export const LeftContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:50%;
    }
`
export const RightContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    display: flex;
    justify-content: flex-end;
    @media(min-width:${({theme})=>theme.screen.tablet}){
        width:50%;
    }
`

export const RightMiniContainer = styled.div`
    width:auto;
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

    & > .bigman {
        margin-top:100px;

        @media(min-width:${({theme})=>theme.screen.tablet}){
            margin-top:0px;
        }
    }


    & > .firstBigImageRow {
        margin-top:64px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            margin-top:0px;
        }
    }

    & > .secondBigImageRow {
        transform:translateY(0px);
        transition:1s ease-in-out;
        margin-top:16px;
        @media(min-width:${({theme})=>theme.screen.tablet}){
            transform:translateY(100vh);
        }
        @media(min-width:${({theme})=>theme.screen.laptopM}){
            margin-top:24px;
        }
    }
`

export const BusinessHeader = styled.header`
    display:inline-block;

    & > .intro {
        padding:10px 16px;
        color:${({theme})=>theme.colors.secondary};
        background-color:${({theme})=>theme.colors.light_secondary};
        display:inline-flex;
        border-radius:999px;
        text-transform:uppercase;
        font-size:12px;
        font-weight:500;

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

export const BusinessButton = styled.button`
    width: auto;
    height:48px;
    font-weight:500;
    font-size:18px;
    background-color:${({theme})=>theme.colors.secondary};
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
    }
`

export const RightImageCont = styled.div`
    width:100%;
    height:auto;
    position:relative;
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    align-items:flex-start;

    @media(min-width:${({theme})=>theme.screen.laptop}){
        gap:24px;
    }
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

    @media(min-width:${({theme})=>theme.screen.laptopM}){
        display:block;
    }
`