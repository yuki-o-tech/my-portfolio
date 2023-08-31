import styled from "styled-components"
import Box from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

interface ContainerProps {
  scrolled: boolean
}

export const Container = styled(Box)<ContainerProps>`
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 24px 100px;
  z-index: 9998;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "none" : "blur(25px)")};
  background: ${({ scrolled }) => (scrolled ? Colors.WHITE : "transparent")};
  @media (max-width: 928px) {
    padding: 24px 50px;
  }
  @media (max-width: 430px) {
    padding: 24px 30px;
    backdrop-filter: none;
    background: ${Colors.WHITE};
  }
`

export const ItemContainer = styled(Box)`
  line-height: 30px;
  &:hover {
    border-bottom: 2px solid ${Colors.BLACK};
    transition: border-bottom 0.2s;
    cursor: pointer;
  }
  @media (max-width: 430px) {
    display: none;
  }
`

export const ItemText = styled(Text)`
  &:hover {
    border-bottom: unset;
  }
`

export const NavBarRight = styled(Box)`
  align-items: center;
`

export const IconBox = styled(Box)`
  align-items: center;
`
