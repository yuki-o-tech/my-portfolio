import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Link as Scroll } from "react-scroll"
import Box from "@/common/Box"
import {
  Container,
  ItemContainer,
  ItemText,
  NavBarRight,
  IconBox,
} from "@/components/NavBar/index.styled"
import LogoIcon from "@/icons/Logo"
import GithubIcon from "@/icons/GithubIcon"
import LinkedInIcon from "@/icons/LinkedInIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import { Colors } from "@/utils/Colors"

interface NavBarProps {
  hideItemBox?: boolean
}

const items = [
  { name: "My Works", to: "work" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
]

const ItemBox = () => {
  return (
    <Box gap={42} mr={90} h={33}>
      {items.map((item, index) => {
        return (
          <ItemContainer className="item container" key={index} pb={34}>
            <ItemText className="text" color={Colors.BLACK} fs={17} fw={500}>
              <Scroll
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {item.name}
              </Scroll>
            </ItemText>
          </ItemContainer>
        )
      })}
    </Box>
  )
}

const NavBar = ({ hideItemBox }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 720) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container h={80} scrolled={scrolled}>
      <Link href="/">
        <LogoIcon />
      </Link>

      <NavBarRight>
        {hideItemBox ? null : <ItemBox />}
        <Box gap={20}>
          <IconBox w={25} h={25}>
            <Link href="https://github.com/yuki-o-tech" target="_blank">
              <GithubIcon />
            </Link>
          </IconBox>
          <IconBox w={25} h={25}>
            <Link
              href="https://www.linkedin.com/in/yuki-otsubo-74987b214/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </IconBox>
          <IconBox w={25} h={25}>
            <Link
              href="https://www.instagram.com/y__photo_art/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </IconBox>
        </Box>
      </NavBarRight>
    </Container>
  )
}

export default NavBar
