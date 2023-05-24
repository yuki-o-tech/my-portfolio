import React from "react"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import ImageCard from "@/common/ImageCard"
import { Container } from "@/components/WorkScreen/index.styled"

const WorkScreen = () => {
  return (
    <TitleScreenContainer title="Works">
      <Container>
        <ImageCard
          src="/currencyExchangeApp.jpg"
          title="Currency Exchanger App"
          hasLink={false}
          imageHeight={330}
        />
      </Container>
    </TitleScreenContainer>
  )
}

export default WorkScreen
