import React from "react"
import Image from "next/image"
import { Col } from "@/common/Box"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import {
  Description,
  Grid,
  RowContainer,
  Title,
} from "@/components/AboutScreen/index.styled"
import { Colors } from "@/utils/Colors"

export interface ItemProps {
  icon: () => JSX.Element
}

const AboutScreen = () => {
  const titleProps = {
    fw: 600,
    lh: 26,
    color: Colors.BLACK,
  }
  const textProps = {
    lh: 26,
    color: Colors.BLACK,
  }
  return (
    <TitleScreenContainer title="About">
      <Grid>
        <Image
          src="/portrait.jpg"
          alt="portrait"
          width={520}
          height={280}
          layout="responsive"
        />
        <Col gap={34}>
          <Title fs={32} fw={600} lh={42} color={Colors.BLACK}>
            Yuki Otsubo
          </Title>
          <Col gap={8}>
            <RowContainer>
              <Title {...titleProps}>Residence</Title>
              <Description {...textProps}>Fukuoka, Japan</Description>
            </RowContainer>
            <RowContainer>
              <Title {...titleProps}>Languages</Title>
              <Description {...textProps}>Japanese, English</Description>
            </RowContainer>
          </Col>
        </Col>
      </Grid>
    </TitleScreenContainer>
  )
}

export default AboutScreen
