import React from "react";
import { FooterContainer, LogoImg, Br, Aesthetic, AestheticContainer, FooterInnerContainer } from "./styles/footer.styled";
import logo from '../assets/grayLogo.svg'
import aesthetic from '../assets/images/footerAesthetic.svg'

const Footer = () =>{
    return (
        <>
            <FooterContainer>
                <AestheticContainer>
                    <Aesthetic src={aesthetic} alt=""/>
                </AestheticContainer>
                
                <FooterInnerContainer>
                    <h3>Contact us</h3>
                    <a href="mailto:help@tellerpoint.ng" className="email">help@tellerpoint.ng</a>

                    <div style={{
                        height:'1px',
                        width:'300px',
                        margin:"36px 0px",
                        backgroundColor:"#808080"
                    }}></div>

                    <LogoImg src={logo} alt="logo"/>

                    <p>Tellerpoint is a product of Branchless Innovation <Br/>Limited, a company duly registered with the <Br/>Corporate Affairs Commission in Nigeria. <Br/>We are on a mission to enabling economic <Br/>prosperity for Africans through universal and<Br/>inclusive commerce.</p>
                </FooterInnerContainer>
            </FooterContainer>
        </>
    )
}

export default Footer