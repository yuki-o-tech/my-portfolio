import styled from "styled-components"
import Box from "@/common/Box"

export const ItemContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 102px;
  row-gap: 128px;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 80px;
  }
  @media (max-width: 928px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    justify-items: center;
    column-gap: initial;
    row-gap: 60px;
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 70px;
    row-gap: 25px;
  }
`

export const IconBox = styled(Box)`
  @media (max-width: 430px) {
    width: 50px;
  }
`
