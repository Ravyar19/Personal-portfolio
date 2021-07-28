import React from "react"
import getfit from "../img/getfit.png"
import find from "../img/find.png"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fade, pageAnimation, photoAnim, lineAnim, slider } from "../animation"
import { useScroll } from "../components/useScroll"
import ScrollTop from "../components/ScrollTop"

const MyWorks = () => {
  const [element, controls] = useScroll()
  return (
    <Work variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <motion.div>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Works>
        <motion.h2 variants={fade}>GETFITKURD</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/getfit">
          <Hide>
            <motion.img variants={photoAnim} src={getfit} alt="getfit" />
          </Hide>
        </Link>
      </Works>
      <Works ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>FindYours</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/findyours">
          <Hide>
            <motion.img variants={photoAnim} src={find} alt="getfit" />
          </Hide>
        </Link>
      </Works>
      <ScrollTop />
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #fff;
  }
`

const Works = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: #23d997;
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
  }
`
const Hide = styled.div`
  overflow: hidden;
`

//fAnimation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #dddddd;
  z-index: 2;
`
const Frame3 = styled(Frame1)`
  background: #30475e;
`

const Frame2 = styled(Frame1)`
  background: #222831;
`
const Frame4 = styled(Frame1)`
  background: #30475e;
`

export default MyWorks
