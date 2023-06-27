import styled from "styled-components"
import Box, { Col } from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  padding: 100px;
  background: ${Colors.WHITE};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: self-start;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding: 50px;
  }
  @media (max-width: 430px) {
    padding: unset;
  }
`

export const CardContainer = styled(Col)`
  align-items: center;
  padding: 40px;
  max-width: 330px;
  @media (max-width: 1280px) {
    padding: 20px;
  }
  @media (max-width: 928px) {
    width: 400px;
  }
`
