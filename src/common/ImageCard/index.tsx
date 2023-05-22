import React from "react"
import Image from "next/image"
import { Col } from "@/common/Box"
import Text from "@/common/Text"
import { CardContainer } from "@/common/ImageCard/index.styled"

export interface ImageCardProps {
  src: string
  title: string
  description?: string
  hasLink: boolean
  imageHeight: number
}

const ImageCard = ({
  src,
  title,
  description,
  hasLink,
  imageHeight,
}: ImageCardProps) => {
  return (
    <CardContainer w={520} mh={422} hasLink={hasLink}>
      <Image src={src} alt="image" width={520} height={imageHeight} />
      <Col p={15} gap={16}>
        <Text fs={20} fw={600} lh={30}>
          {title}
        </Text>
        <Text fs={14} fw={400} lh={20}>
          {description}
        </Text>
      </Col>
    </CardContainer>
  )
}

export default ImageCard
