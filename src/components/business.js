import React, {useEffect, useState} from 'react'
import { BusinessContainer, LeftContainer, RightContainer, BusinessHeader,BusinessButton, RightImageCont, RightImage, OtherRightImage, BusinessMiniContainer, RightMiniContainer, RightInnerContainer, Br} from './styles/business.styled'
import envelop from '../assets/icons/arrow.svg'
import business from '../assets/icons/greenBusiness.svg'
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


import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Business = () =>{
    const [innerWidth, setInnerWidth]  = useState(window.innerWidth)

    const Mobile = () =>{
        return <>
            <RightImageCont className='firstBigImageRow'>
                <OtherRightImage  data-aos="fade-up" src={img1}  className="fade-in-items"/>
                <OtherRightImage  data-aos="fade-up" src={img2}  className="fade-in-items"/>
                <OtherRightImage  data-aos="fade-up" src={img3}  className="fade-in-items"/>
                <OtherRightImage  data-aos="fade-up" src={img4}  className="fade-in-items"/>
                <OtherRightImage  data-aos="fade-up" src={img5}  className="fade-in-items"/>
                <OtherRightImage  data-aos="fade-up" src={img6}  className="fade-in-items"/>
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
            <RightImageCont className='secondBigImageRow' id="secondBigImageRow">
                <OtherRightImage src={bigimg4}/>
                <OtherRightImage src={bigimg5}/>
                <OtherRightImage src={bigimg6}/>
            </RightImageCont>
        </>
    }


    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])

    useEffect(()=>{
        if(innerWidth > 900) {
            let left = document.querySelector(".left-cont")
            let firstImage = document.querySelector('.bigman')
            firstImage.style.height = `${left.offsetHeight}px`
            gsap.timeline({
                scrollTrigger:{
                    trigger:".businessContainer",
                    scrub:true,
                    pin:true,
                    start: "50% 50%",
                    end: "+=250%",
                    ignoreMobileResize: true
                }
            })
            .from('.small-cont', {
                scale:0.9,
                ease:"none",
            })
            .to ('.small-cont', {
                scale:1,
                ease:"none",
            })
            .to('.scrollingElement',{
                duration:0.5,
                y:-(left.offsetHeight)
            }, "+170%")
            .to('.scrollingElement',{
                duration:0.5,
                y:-(left.offsetHeight)
            }, "+180%")
            .to('#secondBigImageRow',{
                duration:0.5,
                y:0,
            }, "+200%")
            .to('#secondBigImageRow',{
                duration:0.5,
                y:0,
            }, "+220%")
            .to('#secondBigImageRow',{
                duration:0.5,
                y:0,
            }, "+240%")
        }

        return ()=>{}

    }, [innerWidth])

    
    
    return (
        <div  className='businessContainer' id="business">
            <BusinessContainer>
                <BusinessMiniContainer className='small-cont'>
                {/* <AestheticImage src={aesthetic}/> */}
                <LeftContainer className="left-cont">
                    <BusinessHeader>
                        <p className='intro'>tellerpoint for businesses  <img src={business} alt=""/></p>
                        <h2>Cross sell and earn <Br/>extra income from <Br/>your customers</h2>
                        <p className='description'>Shop owners leverage the Tellerpoint platform to offer <Br/>over-the-counter bank teller services in their <Br/>communities for a fee and many other benefits. </p>

                        <BusinessButton className='' href="https://wa.me/23409087025468" target="_blank">
                            Become an agent
                            <img className='bounce' src={envelop} alt=""/>
                        </BusinessButton>
                    </BusinessHeader>
                </LeftContainer>

                <RightContainer className='right'>
                    <RightMiniContainer className="imageAnimationContainer">
                        <RightInnerContainer className="scrollingElement">
                            <RightImageCont noMargin className="bigman">
                                <RightImage src={innerWidth < 900 ? smallman : bigman} className="man"/>
                            </RightImageCont>
                            {innerWidth < 900 ? <Mobile/> : <TabUpwards/>}
                        </RightInnerContainer>
                    </RightMiniContainer>
                </RightContainer>
                </BusinessMiniContainer>
            </BusinessContainer>
        </div>
    )
}

export default Business