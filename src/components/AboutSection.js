import React from "react"
import pro from "../img/pro.jpg"
import { About, Description, Hide, Image } from "../styles"
import { motion } from "framer-motion"
import { titleAnim, fade, photoAnim } from "../animation"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Ravyar Aram</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> a Web Developer</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I'm an inquisitive web developer learning to build smashing websites,
          Therefore I believe that there is no limitation to what a human being
          is capable of doing
        </motion.p>
        <motion.button variants={fade}>Contact me</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={pro} alt="" />
      </Image>
    </About>
  )
}

//styled components

export default AboutSection
