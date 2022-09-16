import React, {useEffect, useState} from 'react'
import { BusinessContainer, LeftContainer, RightContainer, BusinessHeader,BusinessButton, RightImageCont, RightImage, OtherRightImage, BusinessMiniContainer, RightMiniContainer, RightInnerContainer, Br, AestheticImage} from './styles/business.styled'
import envelop from '../assets/icons/arrow.svg'
import bigman from '../assets/images/bigman.png'
import smallman from '../assets/images/smallman.png'
import img1 from '../assets/images/business1.svg'
import img2 from '../assets/images/business2.svg'
import img3 from '../assets/images/business3.svg'
import img4 from '../assets/images/business4.svg'
import img5 from '../assets/images/business5.svg'
import img6 from '../assets/images/business6.svg'

import bigimg1 from '../assets/images/bigbusiness1.svg'
import bigimg2 from '../assets/images/bigbusiness2.svg'
import bigimg3 from '../assets/images/bigbusiness3.svg'
import bigimg4 from '../assets/images/bigbusiness4.svg'
import bigimg5 from '../assets/images/bigbusiness5.svg'
import bigimg6 from '../assets/images/bigbusiness6.svg'

import aesthetic from '../assets/images/businessAesthetic.svg'
// import img7 from '../assets/images/contact7.svg'
// import img8 from '../assets/images/contact8.svg'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Business = () =>{
    const [height, setHeight] = useState(window.innerHeight)
    const [innerWidth, setInnerWidth]  = useState(null)
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
        console.log(setHeight)
    }, [height])



    useEffect(()=>{
        let scrollelement = document.querySelector('.scrollingElement')
        let miniCont = document.querySelector('.small-cont')
        let container = document.querySelector('.businessContainer')
        let firstImage = document.querySelector(".bigman")
        let left = document.querySelector(".scroll")
        let secondIconRow = document.querySelector('.secondBigImageRow')

        window.addEventListener("scroll", ()=>{
            if(innerWidth > 900) {
                firstImage.style.height = `${left.offsetHeight}px`
                if(window.scrollY > (container.getBoundingClientRect().bottom) && scrollStatus === "up") {
                    miniCont.style.position = "fixed"
                    miniCont.style.top = "0px"
                    miniCont.style.backgroundColor = "white"
                    miniCont.style.transform = "scale(1)"
    
                    let distance =  Number(window.scrollY) - (Number(miniCont.getBoundingClientRect().bottom) + height)
                    if(distance < 50) {
                        miniCont.style.position = ""
                        miniCont.style.backgroundColor = ""
                    }
    
                    if(distance > 50 && distance < 200) {
                        scrollelement.style.transform = "translateY(0px)";
                    }
                    else if(distance > 200 && distance < 350) {
                        scrollelement.style.transform = `translateY(-${left.offsetHeight}px)`;
                    }
                    else if(distance > 350 && distance < 500) {
                        // scrollelement.style.transform = "translateY(-1200px)";
                        secondIconRow.style.transform = `translateY(0%)`
                        console.log(secondIconRow)
                    }
                    else if(distance > 600) {
                        miniCont.style.position = "relative"
                        miniCont.style.top = "0px"
                        miniCont.style.transform = "scale(0.9)"
                        miniCont.style.backgroundColor = ""
                    }
                }
                else {
                    miniCont.style.position = ""
                    miniCont.style.top = "0px"
                    miniCont.style.transform = "scale(0.9)"
                    miniCont.style.backgroundColor = ""
                }
            }
        })
    })

    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])

    const Mobile = () =>{
        return <>
            <RightImageCont className='firstBigImageRow'>
                <OtherRightImage src={img1}/>
                <OtherRightImage src={img2}/>
                <OtherRightImage src={img3}/>
                <OtherRightImage src={img4}/>
                <OtherRightImage src={img5}/>
                <OtherRightImage src={img6}/>
            </RightImageCont>
        </>
    }

    const TabUpwards = () =>{
        return <>
            <RightImageCont className='firstBigImageRow'>
                <OtherRightImage src={bigimg1}/>
                <OtherRightImage src={bigimg2}/>
                <OtherRightImage src={bigimg3}/>
            </RightImageCont>
            <RightImageCont className='secondBigImageRow'>
                <OtherRightImage src={bigimg4}/>
                <OtherRightImage src={bigimg5}/>
                <OtherRightImage src={bigimg6}/>
            </RightImageCont>
        </>
    }
    
    return (
        <>
            <BusinessContainer className='businessContainer'>
                <BusinessMiniContainer className='small-cont'>
                <AestheticImage src={aesthetic}/>
                <LeftContainer className="scroll">
                    <BusinessHeader>
                        <p className='intro'>tellerport for business</p>
                        <h2>Cross sell and earn <Br/>extra income from <Br/>your customers</h2>
                        <p className='description'>Shop owners leverage the Tellerpoint platform to offer <Br/>over-the-counter bank teller services in their <Br/>communities for a fee and many other benefits. </p>

                        {/* <ParentGlowContainer>
                            {['No upfront cost','Zero line of code ','Plug and play'].map(pros=>{
                                return <GlowContainer>
                                    <OutsideGlow>
                                        <InsideGlow/>
                                    </OutsideGlow>
                                    <p>{pros}</p>
                                </GlowContainer>
                            })}
                        </ParentGlowContainer> */}
                        <BusinessButton className=''>
                            Become an agent
                            <img src={envelop} alt=""/>
                        </BusinessButton>
                    </BusinessHeader>
                </LeftContainer>

                <RightContainer className='right'>
                    <RightMiniContainer className="imageAnimationContainer">
                        <RightInnerContainer className="scrollingElement">
                            <RightImageCont className="bigman">
                                <RightImage src={innerWidth < 800 ? smallman : bigman} className="man"/>
                            </RightImageCont>
                            {innerWidth < 900 ? <Mobile/> : <TabUpwards/>}
                        </RightInnerContainer>
                    </RightMiniContainer>
                </RightContainer>
                </BusinessMiniContainer>
            </BusinessContainer>
            {/* <div style={{height:'100px'}}></div> */}
        </>
    )
}

export default Business