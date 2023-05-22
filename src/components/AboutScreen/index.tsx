import React from "react"
import Image from "next/image"
import Box, { Col } from "@/common/Box"
import Text from "@/common/Text"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { Grid } from "@/components/AboutScreen/index.styled"
import { Colors } from "@/utils/Colors"

export interface ItemProps {
  icon: () => JSX.Element
}

const AboutScreen = () => {
  const titleProps = {
    fs: 26,
    fw: 600,
    lh: 26,
    color: Colors.BLACK,
  }
  const textProps = {
    fs: 18,
    fw: 600,
    lh: 26,
    color: Colors.BLACK,
  }
  return (
    <TitleScreenContainer title="About">
      <Grid>
        <Image src="/portrait.jpg" alt="portrait" width={520} height={280} />
        <Col gap={34}>
          <Text fs={32} fw={600} lh={42} color={Colors.BLACK}>
            Yuki Otsubo
          </Text>
          <Col gap={8}>
            <Box gap={40}>
              <Text {...titleProps}>Residence</Text>
              <Text {...textProps}>Fukuoka, Japan</Text>
            </Box>
            <Box gap={40}>
              <Text {...titleProps}>Languages</Text>
              <Text {...textProps}>Japanese, English</Text>
            </Box>
          </Col>
        </Col>
      </Grid>
    </TitleScreenContainer>
  )
}

export default AboutScreen
