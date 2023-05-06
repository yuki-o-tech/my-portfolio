import React from "react"
import Link from "next/link"
import Box from "@/common/Box"
import Text from "@/common/Text"
import {
  Container,
  ItemContainer,
  NavBarRight,
  IconBox,
} from "@/components/NavBar/index.styled"
import YukiIcon from "@/icons/YukiIcon"
import LinkedInIcon from "@/icons/LinkedInIcon"
import { Colors } from "@/utils/Colors"

const items = ["Home", "About me", "My work", "My skills", "Contact me"]

const ItemBox = () => {
  return (
    <Box gap={42}>
      {items.map((item, index) => {
        return (
          <ItemContainer key={index} pb={34}>
            <Text color={Colors.BLACK} fs={17} fw={500}>
              {item}
            </Text>
          </ItemContainer>
        )
      })}
    </Box>
  )
}

const NavBar = () => {
  return (
    <Container h={86} bgc={Colors.GRAY_100} pt={30} pr={80} pb={26} pl={80}>
      <YukiIcon />
      <ItemBox />
      <NavBarRight>
        <Link href="https://www.linkedin.com/feed/" target="_blank">
          <IconBox w={30} h={30}>
            <LinkedInIcon />
          </IconBox>
        </Link>
      </NavBarRight>
    </Container>
  )
}

export default NavBar
