import React from "react"
import { Container } from "./index.styled"
import Text from "@/common/Text"
import { topSection } from "@/components/TopScreen/topSectionData"

const TopComponent = () => {
  return (
    <Container h={720}>
      <Text fs={20} fw={600} w={460}>
        {topSection.subTitle}
      </Text>
      <Text fs={100} fw={600} w={665}>
        {topSection.title}
      </Text>
      <Text fs={17} fw={400} w={530}>
        {topSection.description}
      </Text>
    </Container>
  )
}

export default TopComponent
