import React, { useState } from "react"
import styled from "styled-components"
import { FaTimes, FaBars } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Link } from "react-router-dom"

const Nav = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavM>
          <NavbarContainer>
            <NavLogo>
              <h1>Ravyar</h1>
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu click={click} onClick={handleClick}>
              <NavItem>
                <NavLinks to="/">
                  <h4>1. About Me</h4>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">
                  <h4>2. My Work </h4>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">
                  <h4>3. Contact Me</h4>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </NavM>
      </IconContext.Provider>
    </>
  )
}

export default Nav

const NavM = styled.nav`
  background: #282828;
  height: 80px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1rem 10rem;
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: 5rem;
  margin-left: auto;

  @media (max-width: 991px) {
    padding-right: 300px;
    padding-left: 30px;
  }
`
const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  font-weight: lighter;
`
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5 ease;
    background: #101522;
  }
`
const NavItem = styled.li`
  height: 80px;
  padding: 2rem;
  h4 {
    font-weight: 200;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-bottom: 5rem;
  }
`

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: red;
      transition: all 0.3 ease;
    }
  }
`
