import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{
        background: "fff",
      }}
    >
      <h1
        style={{
          color: "white",
        }}
      >
        contact
      </h1>
    </motion.div>
  )
}

export default Contact
