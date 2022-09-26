import React, {useEffect, useState} from 'react'
import { ContactContainer, LeftContainer, RightContainer, ContactHeader, OutsideGlow, InsideGlow, GlowContainer, ParentGlowContainer, ContactButton, RightImageCont, RightImage, OtherRightImage, ContactMiniContainer, RightMiniContainer, RightInnerContainer, Br} from './styles/contact.styled'
import envelop from '../assets/icons/envelop.svg'
import finance from '../assets/icons/financialInstituition.svg'
import bigpos from '../assets/images/bigpos2.png'
import smallpos from '../assets/images/smallpos.png'
import img1 from '../assets/images/contact1.svg'
import img2 from '../assets/images/contact2.svg'
import img3 from '../assets/images/contact3.svg'
import img4 from '../assets/images/contact4.svg'
import img5 from '../assets/images/contact5.svg'
import img6 from '../assets/images/contact6.svg'
import img7 from '../assets/images/contact7.svg'
import img8 from '../assets/images/contact8.svg'

import bigimg1 from '../assets/images/bigcontact1.svg'
import bigimg2 from '../assets/images/bigcontact2.svg'
import bigimg3 from '../assets/images/bigcontact3.svg'
import bigimg4 from '../assets/images/bigcontact4.svg'
import bigimg5 from '../assets/images/bigcontact5.svg'
import bigimg6 from '../assets/images/bigcontact6.svg'
import bigimg7 from '../assets/images/bigcontact7.svg'
import bigimg8 from '../assets/images/bigcontact8.svg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const TabUpwards = () =>{
    return (
        <>
            <RightImageCont className='firstIconRow'>
                <OtherRightImage src={bigimg1}/>
                <OtherRightImage src={bigimg2}/>
                <OtherRightImage src={bigimg3}/>
            </RightImageCont>
            <RightImageCont className="secondIconRow">
                <OtherRightImage src={bigimg4}/>
                <OtherRightImage src={bigimg5}/>
                <OtherRightImage src={bigimg6}/>
            </RightImageCont>
            <RightImageCont className="thirdIconRow">
                <OtherRightImage src={bigimg7}/>
                <OtherRightImage src={bigimg8}/>
            </RightImageCont>
        </>
    )
}

const Mobile = () =>{
    return <>
        <RightImageCont className='firstIconRow'>
            <OtherRightImage src={img1} className="fade-in-items"/>
            <OtherRightImage src={img2} className="fade-in-items"/>
            <OtherRightImage src={img3} className="fade-in-items"/>
            <OtherRightImage src={img4} className="fade-in-items"/>
            <OtherRightImage src={img5} className="fade-in-items"/>
            <OtherRightImage src={img6} className="fade-in-items"/>
            <OtherRightImage src={img7} className="fade-in-items"/>
            <OtherRightImage src={img8} className="fade-in-items"/>
        </RightImageCont>
    </>
}


const Contact = () =>{
    // const [readyToScroll, setReadyToScroll] = useState(false)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)


    useEffect(()=>{
        if(innerWidth > 900) {
            let left = document.querySelector('.left')
            let firstImage = document.querySelector('.firstImage')
            firstImage.style.height = `${left.offsetHeight}px`
            
            gsap.timeline({
                scrollTrigger:{
                    trigger:".contactContainer",
                    scrub:true,
                    pin:true,
                    start: "50% 50%",
                    end: "+=250%"
                }
            })
            .from('.mini-cont', {
                scale:0.9,
                ease:"none",
            })
            .to('.mini-cont', {
                scale:1,
                ease:"none",
            })
            .to('.scrollElement',{
                duration:0.5,
                y:-left.offsetHeight
            }, "+170%")
            .to('.secondIconRow',{
                duration:0.5,
                y:0,
            }, "+175%")
            .to('.thirdIconRow',{
                duration:0.5,
                y:0,
            }, "+180%")
            .to('.thirdIconRow',{
                duration:0.5,
                y:0,
            }, "+200%")
            .to('.thirdIconRow',{
                duration:0.5,
                y:0,
            }, "+250%")
        }

        else {
            let items = document.querySelectorAll('.fade-in-items')

            items.forEach(item=>{
                gsap.set(item, {y:100, opacity:0})
                gsap.to(item, {
                    duration: 0.2,
                    autoAlpha:1,
                    y: 0,
                    opacity:1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        end: "bottom top+=100",
                        toggleActions: "play reverse play reverse",
                        ignoreMobileResize: true
                    }
      
                })
            })
            
        }
    }, [innerWidth])

    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])
    
    return (
        <div className='contactContainer' id="instituition">
            <ContactContainer>
                <ContactMiniContainer className='mini-cont'>
                <LeftContainer className="left">
                    <ContactHeader>
                        <p className='intro'>tellerpoint for financial instituitions <img src={finance} alt=""/></p>
                        <h2>Launch your agent</h2>
                        <h2>banking network in a</h2>
                        <h2>matter of days</h2>
                        <p className='description'>We provide financial institutions with the core <Br/>technology and tools to reach the mass market where <Br/>they live and work via agent banking services. </p>

                        <ParentGlowContainer>
                            {['No upfront cost','Zero line of code ','Plug and play'].map((pros, index)=>{
                                return <GlowContainer key={index}>
                                    <OutsideGlow>
                                        <InsideGlow/>
                                    </OutsideGlow>
                                    <p>{pros}</p>
                                </GlowContainer>
                            })}
                        </ParentGlowContainer>
                        <ContactButton className='' href="mailto:help@tellerpoint.ng" target="_blank">
                            Contact sales
                            <img src={envelop} alt=""/>
                        </ContactButton>
                    </ContactHeader>
                </LeftContainer>

                <RightContainer className='right'>
                    <RightMiniContainer className="imageAnimationContainer">
                        <RightInnerContainer className="scrollElement">
                            <RightImageCont noMargin className='firstImage'>
                                <RightImage className="" src={innerWidth < 900 ? smallpos : bigpos}/>
                            </RightImageCont>

                            {innerWidth < 900 ? <Mobile/> : <TabUpwards/>}
                        </RightInnerContainer>
                    </RightMiniContainer>
                </RightContainer>
                </ContactMiniContainer>
            </ContactContainer>
        </div>
    )
}

export default Contact