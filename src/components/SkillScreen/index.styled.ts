import styled from "styled-components"
import Box, { Col } from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  padding: 100px;
  background: ${Colors.WHITE};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 85px;
  justify-items: center;
  align-items: self-start;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
  }
`

export const CardContainer = styled(Col)`
  align-items: center;
`
