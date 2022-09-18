import React, {useEffect, useState} from 'react'
import { ContactContainer, LeftContainer, RightContainer, ContactHeader, OutsideGlow, InsideGlow, GlowContainer, ParentGlowContainer, ContactButton, RightImageCont, RightImage, OtherRightImage, ContactMiniContainer, RightMiniContainer, RightInnerContainer, Br, AestheticImage} from './styles/contact.styled'
import envelop from '../assets/icons/envelop.svg'
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

import aesthetic from '../assets/images/contactAesthetic.svg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Contact = () =>{
    // const [readyToScroll, setReadyToScroll] = useState(false)
    const [innerWidth, setInnerWidth] = useState(null)
    const [scrollStatus, setScrollStatus] = useState(null)

    // To check scroll direction
    useEffect(()=>{
        let position = window.scrollY || document.documentElement.scrollTop
        window.addEventListener('scroll', ()=>{
            let st = window.scrollY || document.documentElement.scrollTop
            if(st > position) {
                setScrollStatus("up")
            }
            else {
                setScrollStatus("down")
            }

            position = st <= 0 ? 0 : st
        })
    }, [])

    useEffect(()=>{
        console.log(scrollStatus)
    }, [scrollStatus])

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
                <OtherRightImage src={img1}/>
                <OtherRightImage src={img2}/>
                <OtherRightImage src={img3}/>
                <OtherRightImage src={img4}/>
                <OtherRightImage src={img5}/>
                <OtherRightImage src={img6}/>
                <OtherRightImage src={img7}/>
                <OtherRightImage src={img8}/>
            </RightImageCont>
        </>
    }


    useEffect(()=>{
        let scrollelement = document.querySelector('.scrollElement')
        let miniCont = document.querySelector('.mini-cont')
        let container = document.querySelector('.container')
        let left = document.querySelector('.left')
        let firstImage = document.querySelector('.firstImage')
        let secondIconRow = document.querySelector('.secondIconRow')
        let thirdIconRow = document.querySelector('.thirdIconRow')


        

        window.addEventListener("scroll", ()=>{
            // console.log("miniCont:" + miniCont)
            // console.log("scrollY:" +  window.scrollY)
            if(innerWidth > 900) {
                firstImage.style.height = `${left.offsetHeight}px`
                if(window.scrollY > (miniCont.getBoundingClientRect().bottom + 100)  && scrollStatus === "up" ) {
                    miniCont.style.position = "fixed"
                    miniCont.style.top = "0px"
                    miniCont.style.transform = "scale(1)"
                    // position = window.scrollY
                    // setReadyToScroll(true)
    
                    let distance =  Number(window.scrollY) - Number(miniCont.getBoundingClientRect().bottom)
                    if(distance < 50) {
                        miniCont.style.position = ""
                    }
    
                    if(distance > 50 && distance < 200) {
                        let left = document.querySelector('.left')
                        console.log(left.offsetHeight)
                        scrollelement.style.transform = "translateY(0px)";
                    }
                    else if(distance > 200 && distance < 350) {
                        scrollelement.style.transform = `translateY(-${left.offsetHeight}px)`;
                    }
                    else if(distance > 350 && distance < 500) {
                        secondIconRow.style.transform = `translateY(0%)`
                        // scrollelement.style.transform = "translateY(-1200px)";
                    }
                    else if(distance > 500 && distance < 650) {
                        thirdIconRow.style.transform = `translateY(0%)`
                        // miniCont.style.position = "relative"
                        // miniCont.style.top = "100px"
                        // miniCont.style.transform = "scale(0.9)"
                    }
                    else if(distance > 750){
                        miniCont.style.position = "relative"
                        miniCont.style.top = "0px"
                        miniCont.style.transform = "scale(0.9)"
                    }
                }
    
                else {
                    miniCont.style.position = ""
                    miniCont.style.top = "0px"
                    miniCont.style.transform = "scale(0.9)"
                }
            }
        })
    })

    // let innerWidth = window.innerWidth

    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])

    
    return (
        <>
            <ContactContainer className='contactContainer'  id="contact">
                <ContactMiniContainer className='mini-cont'>
                {/* <AestheticImage src={aesthetic}/> */}
                <LeftContainer className="left">
                    <ContactHeader>
                        <p className='intro'>tellerport for financial instituitions</p>
                        <h2>Launch your agent</h2>
                        <h2>banking network in a</h2>
                        <h2>matter of days</h2>
                        <p className='description'>We provide financial institutions with the core <Br/>technology and tools to reach the mass market where <Br/>they live and work via agent banking services. </p>

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
                            <RightImageCont className='firstImage'>
                                <RightImage className="pos" src={innerWidth < 800 ? smallpos : bigpos}/>
                                {/* <Card1 src={card1}/> */}
                            </RightImageCont>
                            {innerWidth < 900 ? <Mobile/> : <TabUpwards/>}
                        </RightInnerContainer>
                    </RightMiniContainer>
                </RightContainer>
                </ContactMiniContainer>
            </ContactContainer>

        </>
    )
}

export default Contact