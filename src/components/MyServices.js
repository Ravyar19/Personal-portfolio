import React from "react"
import services from "../img/services.jpg"
import img1 from "../img/1.svg"
import img2 from "../img/2.svg"
import img3 from "../img/3.svg"
import img4 from "../img/4.svg"
import img5 from "../img/5.svg"
import img6 from "../img/6.svg"

import styled from "styled-components"
import { About, Image, Description } from "../styles"

import { scrollReveal } from "../animation"
import { useScroll } from "./useScroll"

const MyServices = () => {
  const [element, controls] = useScroll()

  return (
    <Service
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <Description>
        <h2>
          My <span>Skills</span> ....
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={img1} alt="clock" />
              <h3>JavaScript</h3>
            </div>
            <p>Javascript + ES6</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={img2} alt="clock" />
              <h3>CSS</h3>
            </div>
            <p>FLEXBOX & SaaS</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={img3} alt="clock" />
              <h3>React</h3>
            </div>
            <p>Redux & Context Api</p>
          </Card>
          <Card>
            <div className="icon">
              <img
                src={img4}
                alt="clock"
                style={{
                  width: "48px",
                }}
              />
              <h3>NextJs</h3>
            </div>
            <p>Server-Side Rendering</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={img5} alt="clock" />
              <h3>Git</h3>
            </div>
            <p>Version Control</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={img6} alt="clock" />
              <h3>Firebase</h3>
            </div>
            <p>Auth & real-time</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={services} alt="home" />
      </Image>
    </Service>
  )
}

const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    /* width: 50%; */
    padding: 2rem 0rem 4rem 0rem;
    font-weight: lighter;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 17rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`

export default MyServices
