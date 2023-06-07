import styled from "styled-components"
import Image from "next/image"
import Box from "@/common/Box"
import Text from "@/common/Text"

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  @media (max-width: 928px) {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
  @media (max-width: 430px) {
    row-gap: 20px;
  }
`

export const Title = styled(Text)`
  font-size: 26px;
  @media (max-width: 928px) {
    font-size: 22px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`

export const Description = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 928px) {
    font-size: 14px;
    font-weight: 400;
  }
`

export const RowContainer = styled(Box)`
  gap: 40px;
  @media (max-width: 430px) {
    gap: 20px;
  }
`
