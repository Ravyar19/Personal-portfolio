import React from "react"
import AboutSection from "../components/AboutSection"
import FaqSection from "../components/FaqSection"
import MyServices from "../components/MyServices"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import ScrollTop from "../components/ScrollTop"

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <MyServices />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  )
}

export default AboutUs
