import React,{useState, useEffect} from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import "./NavBar.css";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
           }
        }
        window.addEventListener("scroll", onScroll); 

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
              <NavbarBrand href="#home">Logo</NavbarBrand>
              <NavbarToggle arial-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </NavbarToggle>
              <NavbarCollapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <NavLink href="#home" className={activeLink ==='home' ? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('home')}>Home</NavLink>
                      <NavLink href="#skills" className={activeLink ==='skills' ? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('skills')}>Habilidades</NavLink>
                      <NavLink href="#projects" className={activeLink ==='projects' ? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('projects')}>Projetos</NavLink>
                  </Nav>

                  <span className="navbar-text">
                      <div className="social-icon">
                          <a href="github.com/lazzyin"><i><FaGithub/></i></a>
                          <a href="#"><i><FaLinkedin/></i></a>
                          <a href="#"><i><FaInstagram/></i></a>
                      </div>
                        <button className="btn" onClick={()=>console.log('Connect')}><NavLink href="#contact"><span>Fale comigo</span></NavLink></button>
                  </span>
              </NavbarCollapse>
          </Container>    
    </Navbar>
  )
}

export default NavBar
