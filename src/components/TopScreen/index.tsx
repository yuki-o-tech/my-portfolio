import React, { useEffect, useState } from "react"
import {
  Background,
  Container,
  SubTitle,
  Title,
  Description,
} from "@/components/TopScreen/index.styled"
import { topSection } from "@/components/TopScreen/topSectionData"

const TopComponent = () => {
  const [showSubTitle, setShowSubTitle] = useState<boolean>(false)
  const [showTitle, setShowTitle] = useState<boolean>(false)
  const [showDescription, setShowDescription] = useState<boolean>(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubTitle(true), 500)
    const timer2 = setTimeout(() => setShowTitle(true), 1000)
    const timer3 = setTimeout(() => setShowDescription(true), 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <Container h={720}>
      <Background h={720} />
      {showSubTitle && <SubTitle>{topSection.subTitle}</SubTitle>}
      {showTitle && <Title>{topSection.title}</Title>}
      {showDescription && <Description>{topSection.description}</Description>}
    </Container>
  )
}

export default TopComponent
