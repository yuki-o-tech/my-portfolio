import styled from "styled-components"
import Box from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
`
export const Title = styled(Text)`
  font-size: 26px;
  @media (max-width: 928px) {
    font-size: 24px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`

export const Description = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${Colors.BLACK};
  @media (max-width: 928px) {
    font-size: 14px;
  }
`
