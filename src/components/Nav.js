import React from "react"
import styled from "styled-components"

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Ravyar
        </a>
      </h1>

      <ul>
        <li>
          <a href="/">1. About</a>
        </li>
        <li>
          <a href="/">2. My Works</a>
        </li>
        <li>
          <a href="/">3. Contact Me</a>
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