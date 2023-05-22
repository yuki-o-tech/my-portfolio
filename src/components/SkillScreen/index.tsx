import React from "react"
import { Container } from "@/components/SkillScreen/index.styled"
import Card from "@/components/SkillScreen/Card"
import { cardData } from "@/components/SkillScreen/cardData"

const SkillScreen = () => {
  return (
    <Container>
      {cardData.map((el, index) => {
        return (
          <Card
            key={index}
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        )
      })}
    </Container>
  )
}

export default SkillScreen
