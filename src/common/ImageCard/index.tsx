import React from "react"
import Box, { Col } from "@/common/Box"
import Label from "@/common/Label"
import Text from "@/common/Text"
import { CardContainer, ImageContainer } from "@/common/ImageCard/index.styled"

export interface ImageCardProps {
  src: string
  title: string
  label?: string
  description?: string | React.ReactNode
  hasLink: boolean
  imageHeight: number
}

const ImageCard = ({
  src,
  title,
  label,
  description,
  hasLink,
  imageHeight,
}: ImageCardProps) => {

  const hasLabel = () => {
    if (label) {
      return (
        <Label text={label} />
      )
    } else {
      null
    }
  }

  return (
    <CardContainer mh={500} hasLink={hasLink}>
      <ImageContainer
        src={src}
        alt="image"
        width={520}
        height={imageHeight}
        layout="responsive"
      />
      <Col p={15} gap={16}>
        <Box gap={10} centerAlign> 
          <Text fs={20} fw={600} lh={30}>
          {title}
        </Text>
        {hasLabel()}
        </Box>
       
        <Text fs={14} fw={400} lh={20}>
          {description}
        </Text>
      </Col>
    </CardContainer>
  )
}

export default ImageCard
