import styled from "styled-components"
import Box, { Col } from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

export const Container = styled(Box)`
  padding: 100px 320px;
  background: ${Colors.WHITE};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // column-gap: 85px;
  justify-items: center;
  align-items: self-start;
  @media (max-width: 1560px) {
    padding: 100px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    padding: 50px;
    row-gap: 80px;
  }
  @media (max-width: 430px) {
    padding: unset;
  }
`

export const CardContainer = styled(Col)`
  align-items: center;
  max-width: 270px;
  gap: 42px;
  @media (max-width: 1280px) {
    gap: 30px;
  }
`
export const Title = styled(Text)`
  height: 60px;
  @media (max-width: 1280px) {
    height: unset;
  }
`
