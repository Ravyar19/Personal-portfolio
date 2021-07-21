import React from "react"
import { GrPersonalComputer } from "react-icons/gr"
import home2 from "../img/home2.PNG"
const MyServices = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <GrPersonalComputer />
              <h3>lorem</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <GrPersonalComputer />
              <h3>lorem</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <GrPersonalComputer />
              <h3>lorem</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  )
}

export default MyServices
