import React from "react"
import pro from "../img/pro.jpg"
import { About, Description, Hide, Image } from "../styles"
import { motion } from "framer-motion"
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              I'm <span>Ravyar Aram</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2> a Web Developer</motion.h2>
          </Hide>
        </motion.div>
        <p>
          I'm an inquisitive web developer learning to build smashing websites,
          Therefore I believe that there is no limitation to what a human being
          is capable of doing
        </p>
        <button>Contact me</button>
      </Description>
      <Image className="image">
        <img src={pro} alt="" />
      </Image>
    </About>
  )
}

//styled components

export default AboutSection
