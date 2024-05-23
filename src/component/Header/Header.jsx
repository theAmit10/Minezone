import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.jpg"
import {FaUserAlt} from 'react-icons/fa'


const Header = () => {
  return (
    <ReactNavbar 
    
    navColor1="#081b29"
    navColor2="#00abf0"
    burgerColor="hsl(250,100%,75%)"
    burgerColorHover="#00abf0"
    logo={logo}
    logoWidth="250px"
    logoHoverColor="#00abf0"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="#081b29"
    link1Color="white"
    link1Size="1.5rem"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    />
  )
}

export default Header