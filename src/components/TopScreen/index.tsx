import React from "react"
import {
  Container,
  SubTitle,
  Title,
  Description,
} from "@/components/TopScreen/index.styled"
import { topSection } from "@/components/TopScreen/topSectionData"

const TopComponent = () => {
  return (
    <Container h={720}>
      <SubTitle>{topSection.subTitle}</SubTitle>
      <Title>{topSection.title}</Title>
      <Description>{topSection.description}</Description>
    </Container>
  )
}

export default TopComponent
