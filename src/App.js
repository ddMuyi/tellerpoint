import './App.css';
import GlobalStyles from './components/styles/globalStyle';
import NavBar from './components/header';
import { ThemeProvider } from 'styled-components';
import Hero from './components/hero';
import Contact from './components/contact2';
import Business from './components/business';
import Sponsors from './components/sponsors';
import Footer from './components/footer';

const theme = {
  colors:{
    primary:'#4583FF',
    light_primary:'#F5F8FF',
    text:'#555555',
    secondary:'#83A735',
    light_secondary:'#F3FEDC'
  },
  screen: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
  }
}

function App() {
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
