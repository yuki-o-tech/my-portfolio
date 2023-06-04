import React from "react"
import { Col } from "@/common/Box"
import Text from "@/common/Text"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { experienceData } from "@/components/ExperienceScreen/experienceData"
import { Colors } from "@/utils/Colors"

export interface ItemProps {
  icon: () => JSX.Element
}

const ExperienceScreen = () => {
  const titleProps = {
    fs: 24,
    fw: 600,
    lh: 26,
    color: Colors.BLACK,
  }
  const textProps = {
    fs: 16,
    lh: 26,
    color: Colors.BLACK,
  }
  return (
    <TitleScreenContainer title="Work Experience">
      <Col gap={48}>
        {experienceData.map((el, index) => {
          return (
            <Col gap={24} key={index} bgc="red">
              <Text {...titleProps}>{el.title}</Text>
              <Text {...textProps}>{el.description}</Text>
            </Col>
          )
        })}
      </Col>
    </TitleScreenContainer>
  )
}

export default ExperienceScreen
