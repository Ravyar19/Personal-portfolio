import React from "react"
import getfit from "../img/getfit.png"
import find from "../img/find.png"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"

const MyWorks = () => {
  return (
    <Work variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <Works>
        <h2>GETFITKURD</h2>
        <div className="line"></div>
        <Link to="/work/getfit">
          <img src={getfit} alt="getfit" />
        </Link>
      </Works>
      <Works>
        <h2>FindYours</h2>
        <div className="line"></div>
        <Link to="/work/findyours">
          <img src={find} alt="getfit" />
        </Link>
      </Works>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`

const Works = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
  }
`

export default MyWorks
