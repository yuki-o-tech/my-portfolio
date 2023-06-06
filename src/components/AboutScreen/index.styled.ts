import styled from "styled-components"
import Box from "@/common/Box"
import Text from "@/common/Text"

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }
  @media (max-width: 390px) {
    width: 100%;
    row-gap: 20px;
  }
`
export const Title = styled(Text)`
  font-size: 26px;
  @media (max-width: 390px) {
    font-size: 20px;
  }
`

export const Description = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 390px) {
    font-size: 14px;
    font-weight: 400;
  }
`

export const RowContainer = styled(Box)`
  gap: 40px;
  @media (max-width: 390px) {
    gap: 20px;
  }
`
