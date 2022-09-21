import React, {useEffect, useState} from "react";
import { HeroContainer, LeftHeroContainer, RightHeroContainer, HeroHeader, HeroButton, Br, LeftHeroMiniContainer, HeroAesthetic, RightHeroInnerContainer } from "./styles/hero.styled";
import bankicon from '../assets/icons/pinkBank.svg'
import bank from '../assets/icons/bank.svg'
import africa from '../assets/icons/africa.svg'
import heroImg1 from '../assets/images/hero1.webp'
import heroImg2 from '../assets/images/hero2.webp'
import smallheroImg1 from '../assets/images/smallhero1.webp'
import smallheroImg2 from '../assets/images/smallhero2.webp'
import heroImg3 from '../assets/images/hero3.webp'
import { HeroImage } from "./styles/hero.styled";
import aesthetic from '../assets/images/heroAesthetic.svg'
import arrow from '../assets/icons/arrow.svg'
import business from '../assets/icons/business.svg'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)



const Hero = () =>{
    const [innerWidth, setInnerWidth] = useState(null)
    useEffect(()=>{
        let windowWidth = window.innerWidth
        setInnerWidth(windowWidth)
    }, [innerWidth])

    return (
        <>
            <HeroContainer>
                <HeroAesthetic src={aesthetic}/>
                <LeftHeroContainer>
                    <LeftHeroMiniContainer>
                        <HeroHeader>
                            <p className="welcome intro-y">
                                Welcome to bank branch of the future &nbsp; &nbsp; <span className="wave">👋</span>
                            </p>
                            <div className="main-header">
                                <h1 className="">Community Banking</h1>
                                <div className="second-line">
                                    <img className="second-line-img" src={bankicon} alt="bank icon"/>
                                    <h1>infrastructure</h1>
                                </div>
                                <div className="third-line">
                                    <div className="animate-texts">
                                        <h1>for Businesses <img src={business} alt="icon" className="icons"/></h1>
                                        <h1>for Banks <img src={bank} alt="icon" className="icons"/></h1>
                                        <h1>for Africa <img src={africa} alt="icon" className="icons"/></h1>
                                        <h1>for Businesses <img src={business} alt="icon" className="icons"/></h1>
                                        <h1>for Banks <img src={bank} alt="icon" className="icons"/></h1>
                                        <h1>for Africa <img src={africa} alt="icon" className="icons"/></h1>
                                    </div>
                                </div>
                            </div>
                            <p className="introduction intro-x">Tellerpoint helps financial institutions and businesses deliver <Br/>financial services to underserved communities easily and profitably.</p>
                        </HeroHeader>

                        <HeroButton href="#instituition" className="-intro-y">
                            Find out more 
                            <div style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            transform:"rotate(90deg)"
                            }}>
                                <img className="bounce" src={arrow} alt=""/>
                            </div>
                        </HeroButton>

                    </LeftHeroMiniContainer>
                </LeftHeroContainer>
                <RightHeroContainer>
                    <RightHeroInnerContainer className="heroImageContainer">
                        <HeroImage src={innerWidth < 900 ? smallheroImg1 : heroImg1} small className="imageContents intro-y"/>
                        <HeroImage src={innerWidth < 900 ? smallheroImg2 : heroImg2} bigger className="imageContents -intro-y"/>
                        <HeroImage src={heroImg3} full className="imageContents -intro-x"/>
                    </RightHeroInnerContainer>
                </RightHeroContainer>
            </HeroContainer>
        </>
    )
}

export default Hero