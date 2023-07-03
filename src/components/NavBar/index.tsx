import React from "react"
import Link from "next/link"
import { Link as Scroll } from "react-scroll"
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

interface NavBarProps {
  hideItemBox?: boolean;
}

const items = [
  { name: "Work", to: "work" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
]

const ItemBox = () => {
  return (
    <Box gap={42} mr={90} h={33}>
      {items.map((item, index) => {
        return (
          <ItemContainer key={index} pb={34}>
            <Text color={Colors.BLACK} fs={17} fw={500}>
              <Scroll
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}>
                {item.name}
              </Scroll>
            </Text>
          </ItemContainer>
        )
      })}
    </Box>
  )
}

const NavBar = ({ hideItemBox }: NavBarProps) => {
  return (
    <Container h={80} bgc={Colors.WHITE}>
      <Link href="/">
        <LogoIcon />
      </Link>

      <NavBarRight>
        {hideItemBox ? null : <ItemBox />}
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
