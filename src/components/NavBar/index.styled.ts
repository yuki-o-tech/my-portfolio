import styled from "styled-components"
import Box from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  justify-content: space-between;
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
  gap: 5px;
`

export const IconBox = styled(Box)`
  align-items: center;
`
