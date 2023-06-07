import styled from "styled-components"
import Box from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 24px 100px;
  @media (max-width: 928px) {
    padding: 24px 50px;
  }
  @media (max-width: 430px) {
    padding: 24px 30px;
  }
`

export const ItemContainer = styled(Box)`
  line-height: 30px;
  :hover {
    border-bottom: 2px solid ${Colors.BLACK};
    transition: border-bottom 0.2s;
    cursor: pointer;
  }
  @media (max-width: 430px) {
    display: none;
  }
`

export const NavBarRight = styled(Box)`
  align-items: center;
`

export const IconBox = styled(Box)`
  align-items: center;
`
