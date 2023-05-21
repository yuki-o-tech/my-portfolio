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
import LinkedInIcon from "@/icons/LinkedInIcon"
import { Colors } from "@/utils/Colors"
import LogoIcon from "@/icons/Logo"
import InstagramIcon from "@/icons/InstagramIcon"

const items = ["About", "work", "Contact"]

const ItemBox = () => {
  return (
    <Box gap={42} mr={90} h={33}>
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
    <Container h={80} bgc={Colors.WHITE}>
      <LogoIcon />

      <NavBarRight>
        <ItemBox />
        <Box gap={20}>
          <IconBox w={25} h={25}>
            <Link
              href="https://www.linkedin.com/in/yuki-otsubo-74987b214/"
              target="_blank">
              <LinkedInIcon />
            </Link>
          </IconBox>
          <IconBox w={25} h={25}>
            <Link
              href="https://www.instagram.com/y__photo_art/"
              target="_blank">
              <InstagramIcon />
            </Link>
          </IconBox>
        </Box>
      </NavBarRight>
    </Container>
  )
}

export default NavBar
