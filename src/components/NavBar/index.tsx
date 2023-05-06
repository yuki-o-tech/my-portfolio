import React from "react"
import Link from "next/link"
import { Container, Item, NavBarRight } from "./index.styled"
import { Colors } from "../../utils/Colors"
import Box from "../../common/Box"
import LinkedInIcon from "../../icons/LinkedInIcon"

const items = ["Home", "About me", "My work", "My skills", "Contact me"]

const ItemBox = () => {
  return (
    <Box gap={42}>
      {items.map((item, index) => {
        return (
          <Box key={index} bgc={Colors.CYAN_600} pb={34}>
            <Item color={Colors.BLACK} fs={17}>
              {item}
            </Item>
          </Box>
        )
      })}
    </Box>
  )
}
// TODO: font-family and size, if it needs a logo?(or my name on the navBar left)

const NavBar = () => {
  return (
    <Container h={86} bgc={Colors.BLUE_700} pt={30} pr={80} pb={26} pl={80}>
      test
      <ItemBox />
      <NavBarRight>
        <Link href="https://www.linkedin.com/feed/" target="_blank">
          <LinkedInIcon />
        </Link>
      </NavBarRight>
    </Container>
  )
}

export default NavBar
