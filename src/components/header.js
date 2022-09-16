import React, {useState, useEffect} from "react";
import logo from '../assets/logo.svg'
import { BurgerButton, Links, Logo, Nav, Container, ExtendedNav } from "./styles/header.style";

const NavBar = () =>{
    const [open, setOpen] = useState(false)

    useEffect(() => {
      if(open) {
        document.body.style.overflow = "hidden"
      }
      else {
        document.body.style.overflow  = "scroll"
      }
    
      return () => document.body.style.overflow  = "scroll"
    }, [open])
    
    return (
        <Container>
            <Logo Img={logo}/>
            <Nav>
                <Links href="#instituition">for instituition</Links>
                <Links href="#business">for business</Links>
            </Nav>
            <BurgerButton onClick={()=>setOpen(!open)}>
                {open ? <>&#10005;</> : <>&#8801;</>}
            </BurgerButton>

            {open && <ExtendedNav>
                <Links href="#instituition">for instituition</Links>
                <Links href="#business">for business</Links>
            </ExtendedNav>}
        </Container>
    )
}

export default NavBar