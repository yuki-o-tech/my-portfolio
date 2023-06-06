import styled from "styled-components"
import Box from "@/common/Box"

export const ItemContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 102px;
  row-gap: 128px;
  @media (max-width: 928px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 390px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 70px;
    row-gap: 25px;
  }
`

export const IconBox = styled(Box)`
  @media (max-width: 390px) {
    width: 50px;
  }
`
