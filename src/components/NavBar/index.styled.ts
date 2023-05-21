import styled from "styled-components"
import Box from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  justify-content: space-between;
  padding: 24px 40px;
`

export const ItemContainer = styled(Box)`
  line-height: 30px;
  :hover {
    border-bottom: 2px solid ${Colors.BLACK};
    transition: border-bottom 0.2s;
  }
`

export const NavBarRight = styled(Box)`
  align-items: center;
`

export const IconBox = styled(Box)`
  align-items: center;
`
