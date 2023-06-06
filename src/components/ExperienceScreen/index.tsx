import React from "react"
import { Col } from "@/common/Box"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { experienceData } from "@/components/ExperienceScreen/experienceData"
import { Description, Title } from "@/components/ExperienceScreen/index.styled"
import { Colors } from "@/utils/Colors"

export interface ItemProps {
  icon: () => JSX.Element
}

const ExperienceScreen = () => {
  const titleProps = {
    fw: 600,
    lh: 26,
    color: Colors.BLACK,
  }
  const textProps = {
    lh: 26,
    color: Colors.BLACK,
  }
  return (
    <TitleScreenContainer title="Work Experience">
      <Col gap={48}>
        {experienceData.map((el, index) => {
          return (
            <Col gap={24} key={index}>
              <Title {...titleProps}>{el.title}</Title>
              <Description {...textProps}>{el.description}</Description>
            </Col>
          )
        })}
      </Col>
    </TitleScreenContainer>
  )
}

export default ExperienceScreen
