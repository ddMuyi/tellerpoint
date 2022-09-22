import styled, {css} from "styled-components";

function createCSS() {
    let styles = '';
  
    for (let i = 0; i < 4; i++) {
       styles += `
        ${(i * 33.333) - 10}%, ${i * 33.333}% {
            transform: translateY(${(-100 / 4) * i}%);
            -webkit-transform: translateY(${(-100 / 4) * i}%);
            -ms-transform: translateY(${(-100 / 4) * i}%);
            -o-transform: translateY(${(-100 / 4) * i}%);
            -moz-transform: translateY(${(-100 / 4) * i}%);
        };
       `
    }
    console.log(styles)
  
    return css`${styles}`;
  }

export const HeroContainer = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    position:relative;
    padding-bottom:4rem;
    padding-top:5rem;
    overflow:hidden;

    padding-left:16px;
    padding-right:16px;
    @media(min-width:${({theme})=>theme.screen.laptop}) {
        padding-left:2rem;
        padding-right:2rem;
        padding-top:1rem;
    }
    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        padding-left:0px;
        padding-right:0px;
        width:90%;
        margin:0px auto;
        padding-top:3rem;
    }
    @media(min-width:${({theme})=>theme.screen.desktop}) {
        padding-left:0px;
        padding-right:0px;
        width:80%;
        margin:0px auto;
    }

    @media(min-width:${({theme})=>theme.screen.tablet}){
        flex-direction:row;
    }
`

export const LeftHeroContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    position:relative;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        width:55%;
        gap:32px;
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        width:55%;
        gap:32px;
    }
`

export const LeftHeroMiniContainer = styled.div`
    width:auto;
    height:auto;
    display:inline-block;
`

export const RightHeroContainer = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:flex-end;
    position:relative;
    margin-top:2rem;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        width:45%;
        margin-top:0;
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        width:45%;
        margin-top:0;
    }
`

export const RightHeroInnerContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:24px;
    position:relative;
    margin-top:1rem;

    @media(min-width:${({theme})=>theme.screen.mobileS}){
        margin-top:4rem;
    }

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        width:90%;
        margin-top:0;
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        width:80%;
        gap:32px;
        margin-top:0;
    }
`

export const HeroImage = styled.img.attrs(props=>({
    src:props.src
}))`
    width:${props => props.full ? '100%' : props.small ? 'calc(50% - 12px)' : props.bigger ? 'calc(50% - 12px)' : 'calc(50% - 12px)'};
    height:auto;

    @media(min-width:${({theme})=>theme.screen.tablet}) {
        width:${props => props.full ? '100%' : props.small ? 'calc(45% - 16px)' : props.bigger ? 'calc(55% - 16px)' : 'calc(50% - 16px)'};
    }

    @media(min-width:${({theme})=>theme.screen.laptopM}) {
        width:${props => props.full ? '100%' : props.small ? 'calc(45% - 16px)' : props.bigger ? 'calc(55% - 16px)' : 'calc(50% - 16px)'};
    }

    &:hover {
        transform:scale(1.2);
    }
`

export const HeroHeader = styled.header`
    text-align:left;

    &> .welcome {
        background-color:${({theme})=>theme.colors.light_primary};
        text-transform:uppercase;
        color:${({theme})=>theme.colors.primary};
        font-weight:500;
        display:inline-flex;
        border-radius:999px;
        padding:9.5px 16px;
        font-size:8px;
        align-items:center;
        justify-content:center;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:12px;
        }

        @media(min-width:${({theme})=>theme.screen.laptopM}){
            font-size:16px;
        }

        & > .wave {
            animation:wavehand 2s ease infinite;
            -webkit-animation:wavehand 2s ease infinite;
            -moz-animation:wavehand 2s ease infinite;
        }

        @keyframes wavehand {
            0% {transform:rotate(0deg)}
            50% {transform:rotate3d(1,0,1, 20deg)}
            100% {transform:rotate(0deg)}
        }
    }

    & > .introduction {
        font-size:0.8rem;
        margin-top:24px;
        line-height:2rem;
        font-weight:500;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:1rem;
        }
        

        @media(min-width:${({theme})=>theme.screen.laptopM}){
            font-size:1.2rem;
        }
    }

    & > .main-header {
        font-size:0.7rem;
        font-weight:600;
        display:block;
        margin-top:24px;

        @media(min-width:${({theme})=>theme.screen.mobileS}){
            font-size:1rem;
        }

        @media(min-width:${({theme})=>theme.screen.laptopM}){
            font-size:1.7rem;
        }

        & > .second-line {
            display:flex;
            gap:16px;

            & > .second-line-img {
                width: 25px;
                height:auto;

                @media(min-width:${({theme})=>theme.screen.mobileS}){
                    width: 38px
                }

                @media(min-width:${({theme})=>theme.screen.laptopM}){
                    width:auto;
                }
            }
        }

        & > .third-line {
            height:1.7rem;
            color:${({theme})=>theme.colors.primary};
            overflow:hidden;

            @media(min-width:${({theme})=>theme.screen.mobileS}){
                height: 2.4rem;
            }

            @media(min-width:${({theme})=>theme.screen.laptopM}){
                height:4.15rem;
            }

            & > .animate-texts{
                animation:scroll 6s linear infinite;
                -moz-animation:scroll 6s linear infinite;
                -o-animation:scroll 6s linear infinite;
                -webkit-animation:scroll 6s linear infinite;
                -ms-animation:scroll 6s linear infinite;

                @keyframes scroll {
                    ${createCSS()}
                    /* 0%{transform:translateY(0)}
                    1%{transform:translateY(-16.66%)}
                    33%{transform:translateY(-16.66%)}
                    34%{transform:translateY(-33.32%)}
                    66%{transform:translateY(-33.32%)}
                    67%{transform:translateY(-49.98%)}
                    100%{transform:translateY(-49.98%)} */
                }

                & > h1 {
                    color:${({theme})=>theme.colors.primary};
                    display:flex;
                    align-items:center;
                    justify-content:flex-start;
                    gap:16px;
                    /* padding:2px 0; */

                    @media(min-width:${({theme})=>theme.screen.laptopM}){
                        /* line-height:6rem; */
                    }

                    & > .icons {
                        width: 25px;
                        height:auto;

                        @media(min-width:${({theme})=>theme.screen.mobileS}){
                            width:32px;
                        }

                        @media(min-width:${({theme})=>theme.screen.laptopM}){
                            width:auto;
                        }
                    }
                }
            }
        }
    }
`

export const HeroButton = styled.a.attrs((props)=>({
    href:props.href
}))`
    width:auto;
    height:40px;
    background-color:${({theme})=>theme.colors.primary};
    color:white;
    border:none;
    border-radius:9999px;
    padding:0px 24px;
    font-size:0.8rem;
    font-weight:500;
    margin-top:32px;
    display:inline-flex;
    align-items:center;
    text-decoration:none;
    gap:22px;
    
    &:hover{
        cursor:pointer;
    }
    
    @media(min-width:${({theme})=>theme.screen.mobileS}){
        height:48px;
        font-size:1.1rem;
    }

    @media(min-width:${({theme})=>theme.screen.tablet}){
        margin-top:56px;
        padding:0px 48px;
        height:64px;
        font-size:1.2rem;
    }

    & > div {
        transition:0.5s ease;

        & > img {
            width:16px;

            @media(min-width:${({theme})=>theme.screen.laptopM}){
                width:auto;
            } 
        }
    }
`

export const Br = styled.br`
    display:none;
    @media(min-width:${({theme})=>theme.screen.laptopM}){
        display:block;
    }
`

export const HeroAesthetic = styled.img.attrs(props=>({
    src:props.src
}))`
    width:auto;
    height:auto;
    position:absolute;
    bottom:0;
    right:0;
    animation:wave 20s ease-in-out infinite;
    display:none;

    /* @media(min-width:${({theme})=>theme.screen.tablet}){
        display:block;
    } */

    @keyframes wave {
        0%{transform:translate3d(0, 0, 0)}
        30%{transform:translate3d(40px, 12px, 0)}
        60%{transform:translate3d(60px, 22px, 0)}
        70%{transform:translate3d(40px, 13px, 0)}
        100%{transform:translate3d(0, 0, 0)}
    }
`