import React from "react"
import {
  Container,
  Grid,
  IconBox,
  Input,
} from "@/components/FooterScreen/index.style"
import Box, { Col } from "src/common/Box"
import Text from "src/common/Text"
import { Colors } from "src/utils/Colors"
import Link from "next/link"
import LinkedInIcon from "src/icons/LinkedInIcon"
import InstagramIcon from "src/icons/InstagramIcon"

const LeftContainer = () => {
  return (
    <Col gap={36}>
      <Text fs={32} fw={600} lh={42} color={Colors.BLACK}>
        Contact
      </Text>
      <Text fs={17} lh={26} color={Colors.BLACK}>
        Please feel free to contact me if you have any questions.
      </Text>
      <Box gap={16}>
        <IconBox w={25} h={25}>
          <Link
            href="https://www.linkedin.com/in/yuki-otsubo-74987b214/"
            target="_blank">
            <LinkedInIcon />
          </Link>
        </IconBox>
        <IconBox w={25} h={25}>
          <Link href="https://www.instagram.com/y__photo_art/" target="_blank">
            <InstagramIcon />
          </Link>
        </IconBox>
      </Box>
    </Col>
  )
}

const RightContainer = () => {
  //TODO: Add formik and yup
  return (
    <Col gap={18}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Type your message here" />
      <button>Submit</button>
    </Col>
  )
}

const FooterScreen = () => {
  return (
    <Container>
      <Grid>
        <LeftContainer />
        <RightContainer />
      </Grid>
    </Container>
  )
}

export default FooterScreen
