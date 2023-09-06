import React from "react"
import Link from "next/link"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import ImageCard from "@/common/ImageCard"
import {
  Container,
  ItemContainer,
} from "@/components/WorkProjectScreen/index.styled"
import { workProjectData } from "@/components/WorkProjectScreen/workProjectData"

const WorkProjectScreen = () => {
  return (
    <TitleScreenContainer title="Work Projects">
      <Container>
        {workProjectData.map((el, index) => {
          return (
            <ItemContainer key={index}>
              <Link href={el.link} target="_blank">
                <ImageCard
                  src={el.src}
                  title={el.title}
                  label={el.label}
                  description={el.description}
                  hasLink
                  imageHeight={270}
                />
              </Link>
            </ItemContainer>
          )
        })}
      </Container>
    </TitleScreenContainer>
  )
}

export default WorkProjectScreen
