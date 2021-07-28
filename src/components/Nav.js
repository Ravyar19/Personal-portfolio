import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Ravyar
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">1. About</Link>
        </li>
        <li>
          <Link to="/work">2. My Works</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Me</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 999;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
    font-weight: lighter;
  }
`

export default Nav
