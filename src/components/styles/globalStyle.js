import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        -moz-osx-font-smoothing: grayscale;
        color:${({theme})=>theme.colors.text}
    }

    body {
        box-sizing:border-box;
        margin:0;
        padding:0;
    }

    h1, h2, h3{
        font-family:"Clash Display", sans-serif;
        color:#000000;
    }

    .container {
        padding-left:8px;
        padding-right:8px;
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
    }
`

export default GlobalStyles