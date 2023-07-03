import React from "react"
import Link from "next/link"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import ImageCard from "@/common/ImageCard"
import { Container, ItemContainer } from "@/components/WorkScreen/index.styled"
import { workData } from "@/components/WorkScreen/workData"

const WorkScreen = () => {
  return (
    <TitleScreenContainer title="Works">
      <Container>
        {workData.map((el, index) => {
          return (
            <ItemContainer key={index}>
              <Link href={el.link}>
                <ImageCard
                  src={el.src}
                  title={el.title}
                  description={el.description}
                  hasLink
                  imageHeight={330}
                />
              </Link>
            </ItemContainer>
          )
        })}
      </Container>
    </TitleScreenContainer>
  )
}

export default WorkScreen
