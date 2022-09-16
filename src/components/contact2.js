import React, {useEffect, useState} from 'react'
import { ContactContainer, LeftContainer, RightContainer, ContactHeader, OutsideGlow, InsideGlow, GlowContainer, ParentGlowContainer, ContactButton, RightImageCont, RightImage, OtherRightImage, ContactMiniContainer, RightMiniContainer, RightInnerContainer} from './styles/contact.styled'
import envelop from '../assets/icons/envelop.svg'
import bigpos from '../assets/images/bigpos.jpg'
import smallpos from '../assets/images/smallpos.jpg'
import img1 from '../assets/images/contact1.svg'
import img2 from '../assets/images/contact2.svg'
import img3 from '../assets/images/contact3.svg'
import img4 from '../assets/images/contact4.svg'
import img5 from '../assets/images/contact5.svg'
import img6 from '../assets/images/contact6.svg'
import img7 from '../assets/images/contact7.svg'
import img8 from '../assets/images/contact8.svg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Contact = () =>{
    const [readyToScroll, setReadyToScroll] = useState(false)

    useEffect(()=>{
        
        gsap.timeline({
            scrollTrigger:{
                trigger:".contactContainer",
                scrub:true,
                pin:true,
                start: "50% 50%",
                end: "+=100%",
            }
        })
        .from('.mini-cont', {
            scale:0.9,
            ease:"none",
        })
        .to ('.mini-cont', {
            scale:1,
            ease:"none",
        })
        
    }, [])

    useEffect(()=>{
        let targetElem = document.querySelector('.imageAnimationContainer').getBoundingClientRect().top
        let scrollelement = document.querySelector('.scrollElement')
        let miniCont = document.querySelector('.contactContainer')

        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            // console.log(targetElem.top)
            // console.log(scroll)
            if(Number(scroll) > Number(targetElem)) {
                // setReadyToScroll(true)
                // miniCont.style.position = "fixed"
                miniCont.style.top = "0px"
                let distance =  Number(window.scrollY) - Number(targetElem)
                if(distance > 100 && distance < 700) {
                    scrollelement.style.transform = "translateY(0px)";
                }
                else if(distance > 700 && distance < 800) {
                    scrollelement.style.transform = "translateY(-600px)";
                }
                else if(distance > 800 && distance < 900) {
                    scrollelement.style.transform = "translateY(-1200px)";
                }

                // else if(distance > 900 && distance < 1000) {
                //     scrollelement.style.transform = "translateY(-1800px)";
                // }
            }
            else {
                miniCont.style.position = "relative"
                scrollelement.style.transform = "translateY(0px)";
            }
            // else {
            //     setReadyToScroll(false)
            // }
        });
    })

    // useEffect(()=>{
    //     let targetElem = document.querySelector('.imageAnimationContainer').getBoundingClientRect()
    //     if(readyToScroll) {
    //         console.log(targetElem.top - window.scrollY)
    //     }
    // }, [readyToScroll])
    
    return (
        <>
            <ContactContainer className='contactContainer'>
                <ContactMiniContainer className='mini-cont'>
                <LeftContainer className="scroll">
                    <ContactHeader>
                        <p className='intro'>tellerport for financial instituitions</p>
                        <h2>Launch your agent banking network in a matter of days</h2>
                        <p className='description'>We provide financial institutions with the core technology and tools to reach the mass market where they live and work via agent banking services. </p>

                        <ParentGlowContainer>
                            {['No upfront cost','Zero line of code ','Plug and play'].map(pros=>{
                                return <GlowContainer>
                                    <OutsideGlow>
                                        <InsideGlow/>
                                    </OutsideGlow>
                                    <p>{pros}</p>
                                </GlowContainer>
                            })}
                        </ParentGlowContainer>
                        <ContactButton className=''>
                            Contact sales
                            <img src={envelop} alt=""/>
                        </ContactButton>
                    </ContactHeader>
                </LeftContainer>

                <RightContainer className='right'>
                    <RightMiniContainer className="imageAnimationContainer">
                        <RightInnerContainer className="scrollElement">
                            <RightImageCont>
                                <RightImage className="" src={bigpos}/>
                            </RightImageCont>
                            <RightImageCont>
                                <OtherRightImage src={img1}/>
                                <OtherRightImage src={img2}/>
                                <OtherRightImage src={img3}/>
                                <OtherRightImage src={img4}/>
                            </RightImageCont>
                            <RightImageCont>
                                <OtherRightImage src={img5}/>
                                <OtherRightImage src={img6}/>
                                <OtherRightImage src={img7}/>
                                <OtherRightImage src={img8}/>
                            </RightImageCont>
                            {/* <RightImageCont>
                                <RightImage src={bigpos}/>
                            </RightImageCont> */}
                        </RightInnerContainer>
                    </RightMiniContainer>
                </RightContainer>
                </ContactMiniContainer>
            </ContactContainer>
            <div style={{height:'100vh'}}></div>
            <div style={{height:'100vh'}}></div>
            <div style={{height:'100vh'}}></div>
        </>
    )
}

export default Contact