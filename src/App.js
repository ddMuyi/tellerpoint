import './App.css';
import GlobalStyles from './components/styles/globalStyle';
import NavBar from './components/header';
import { ThemeProvider } from 'styled-components';
import Hero from './components/hero';
import Contact from './components/contact2';
import Business from './components/business';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
  

const theme = {
  colors:{
    primary:'#4583FF',
    light_primary:'#F5F8FF',
    text:'#555555',
    secondary:'#83A735',
    light_secondary:'#F3FEDC'
  },
  screen: {
    mobileXS:'250px',
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '767px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '1920px'
  }
}

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <NavBar/>
        <Hero/>
        <Contact/>
        {/* <Contact/> */}
        <Business/>
        <Sponsors/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
