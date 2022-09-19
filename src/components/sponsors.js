import React, {useState, useEffect} from 'react'
import { SponsorContainer, SponsorMiniContainer, SponsorHeader, SponsorsLogosCont, SponsorsLogo, Br } from './styles/sponsors.styled'

// For large screen
import coral from '../assets/logos/coralpay.svg'
import flutterwave from '../assets/logos/Flutterwave.svg'
import globus from '../assets/logos/Globus-bank.svg'
import interswitch from '../assets/logos/Interswitch.svg'
import m from '../assets/logos/m.svg'
import monnify from '../assets/logos/monnify.svg'
import netop from '../assets/logos/netop.svg'
import nibss from '../assets/logos/nibbs.svg'
import paga from '../assets/logos/Paga.svg'
import up from '../assets/logos/up.svg'
import zenith from '../assets/logos/Zenith-bank.svg'

// for mobile
import smallcoral from '../assets/logos/smallCoralpay.svg'
import smallflutterwave from '../assets/logos/smallFlutterwave.svg'
import smallglobus from '../assets/logos/smallGlobus.svg'
import smallinterswitch from '../assets/logos/smallInterswitch.svg'
import smallm from '../assets/logos/smallM.svg'
import smallmonnify from '../assets/logos/smallMonnify.svg'
import smallnetop from '../assets/logos/smallNetop.svg'
import smallnibss from '../assets/logos/smallNibbs.svg'
import smallpaga from '../assets/logos/smallPaga.svg'
import smallup from '../assets/logos/smallUp.svg'
import smallzenith from '../assets/logos/smallZenith.svg'

const images = [zenith, globus, nibss, interswitch, up, coral, paga, monnify, flutterwave, netop, m]

const smallImages = [smallzenith, smallglobus, smallnibss, smallinterswitch, smallup, smallcoral, smallpaga, smallmonnify, smallflutterwave, smallnetop, smallm]

const Sponsors = () =>{
    const [innerWidth, setInnerWidth] = useState(null)
    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])
    return (
        <>
            <SponsorContainer className='container'>
                <SponsorMiniContainer>
                    <SponsorHeader>
                        <h3>Supported by banking and payments industry leaders</h3>
                        <p>Tellerpoint services are delivered in partnership with strong local financial <Br/>institutions and payments companies in Nigeria</p>
                    </SponsorHeader>

                    <div style={{
                        width:'300px',
                        height:"1px",
                        backgroundColor:'#D4D4D4',
                        margin:'36px auto'
                    }}></div>

                    <SponsorsLogosCont>
                        {innerWidth > 800 && images.map((image, index)=>{
                            return <SponsorsLogo src={image} small key={index}/>
                        })}
                        {innerWidth < 800 && smallImages.map((image, index)=>{
                            return <SponsorsLogo src={image} small key={index}/>
                        })}
                    </SponsorsLogosCont>
                </SponsorMiniContainer>
            </SponsorContainer>
        </>
    )
}

export default Sponsors