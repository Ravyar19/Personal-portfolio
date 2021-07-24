import React from "react"
import pro from "../img/pro.jpg"
import { About, Description, Hide, Image } from "../styles"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Hi</h2>
          </Hide>
          <Hide>
            <h2>
              I'm <span>Ravyar Aram</span>{" "}
            </h2>
          </Hide>
          <Hide>
            <h2> a Web Developer</h2>
          </Hide>
        </div>
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
