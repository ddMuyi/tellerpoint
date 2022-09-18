import React from "react";
import { HeroContainer, LeftHeroContainer, RightHeroContainer, HeroHeader, HeroButton, Br, LeftHeroMiniContainer, HeroAesthetic, RightHeroInnerContainer } from "./styles/hero.styled";
import bankicon from '../assets/icons/pinkBank.svg'
import heroImg1 from '../assets/images/hero1.jpg'
import heroImg2 from '../assets/images/hero2.jpg'
import heroImg3 from '../assets/images/hero3.jpg'
import { HeroImage } from "./styles/hero.styled";
import aesthetic from '../assets/images/heroAesthetic.svg'
import arrow from '../assets/icons/arrow.svg'
import business from '../assets/icons/business.svg'



const Hero = () =>{
    const animateArrow = (e) =>{
        e.currentTarget.children[0].style.transform = "rotate(90deg)"
    }
    const returnArrow = (e) =>{
        e.currentTarget.children[0].style.transform = "rotate(0deg)"
    }
    return (
        <>
            <HeroContainer>
                <HeroAesthetic src={aesthetic}/>
                <LeftHeroContainer>
                    <LeftHeroMiniContainer>
                        <HeroHeader>
                            <p className="welcome">
                                Welcome to bank branch of the future &nbsp; &nbsp; <span className="wave">👋</span>
                            </p>
                            <div className="main-header">
                                <h1>Community Banking</h1>
                                <div className="second-line">
                                    <img className="second-line-img" src={bankicon} alt="bank icon"/>
                                    <h1>infrastructure</h1>
                                </div>
                                <div className="third-line">
                                    <div className="animate-texts">
                                        <h1>for Businesses <img src={business} alt="icon" className="icons"/></h1>
                                        <h1>for Banks <img src={business} alt="icon" className="icons"/></h1>
                                        <h1>for Businesses <img src={business} alt="icon" className="icons"/></h1>
                                        <h1>for Banks <img src={business} alt="icon" className="icons"/></h1>
                                    </div>
                                </div>
                            </div>
                            <p className="introduction">Tellerpoint helps financial institutions and businesses deliver <Br/>financial services to underserved communities easily and profitably.</p>
                        </HeroHeader>

                        <HeroButton onMouseOver={animateArrow} onMouseOut={returnArrow} href="#contact">
                            Find out more 
                            <div style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                            }}>
                                <img src={arrow} alt=""/>
                            </div>
                        </HeroButton>

                    </LeftHeroMiniContainer>
                </LeftHeroContainer>
                <RightHeroContainer>
                    <RightHeroInnerContainer>
                        <HeroImage src={heroImg1} small/>
                        <HeroImage src={heroImg2} bigger/>
                        <HeroImage src={heroImg3} full/>
                    </RightHeroInnerContainer>
                </RightHeroContainer>
            </HeroContainer>
        </>
    )
}

export default Hero