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
                <Links href="#instituition">for instituitions</Links>
                <Links href="#business">for businesses</Links>
            </Nav>
            <BurgerButton onClick={()=>setOpen(!open)}>
                {open ? <>&#215;</> : <>&#8801;</>}
            </BurgerButton>

            {open && <ExtendedNav>
                <Links  onClick={()=>setOpen(false)} href="#instituition">for instituitions</Links>
                <Links  onClick={()=>setOpen(false)} href="#business">for businesses</Links>
            </ExtendedNav>}
        </Container>
    )
}

export default NavBar