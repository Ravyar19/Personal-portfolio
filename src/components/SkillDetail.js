import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { SkillState } from "../SkillState"

const SkillDetail = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [skills, setSkills] = useState(SkillState)
  const [skill, setMovie] = useState(null)

  useEffect(() => {
    const currentSkill = skills.filter((SkillState) => SkillState.url === url)
    setMovie(currentSkill[0])
  }, [skills, url])

  return (
    <>
      {skill && (
        <Details>
          <HeadLine>
            <h2>{skill.title}</h2>
            <img src={skill.mainImg} alt="skill" />
          </HeadLine>
          <Skills>
            {skill.tech.map((tech) => (
              <Skill
                title={tech.title}
                description={tech.description}
                key={tech.title}
              />
            ))}
          </Skills>
          <ImageDisplay>
            <img src={skill.secondaryImg} alt="secondImage" />
          </ImageDisplay>
        </Details>
      )}
    </>
  )
}

const Details = styled.div`
  color: white;
`

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  color: white;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
    margin-bottom: 5rem;
  }
`

const Skills = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`

const Skill = ({ title, description }) => {
  return (
    <SkillStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </SkillStyle>
  )
}

export default SkillDetail

const SkillStyle = styled.div`
  padding: 5rem;
  color: white;

  h3 {
    font-size: 2rem;
  }

  .line {
    background: #23d997;
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`
