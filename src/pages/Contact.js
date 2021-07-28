import React from "react"
import { motion } from "framer-motion"
import { pageAnimation, titleAnim } from "../animation"
import styled from "styled-components"

const Contact = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{
        background: "fff",
      }}
    >
      <Title>
        <Hide>
          <motion.h2
            style={{
              color: "white",
            }}
            variants={titleAnim}
          >
            Get in touch.
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ravyar-aram-b767661aa/"
            >
              <h3>Send Me A Message.</h3>
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ravyar.ara@gmail.com"
            >
              <h3>Email Me.</h3>
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
`

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  font-weight: bold;
`

const Hide = styled.div`
  overflow: hidden;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h3 {
    margin: 2rem;
    color: white;
    font-weight: lighter;
  }
  a {
    text-decoration: none;
  }
`

export default Contact
