import styled from "styled-components"
import { WideCol } from "@/common/Box"

interface ScreenContainerProps{
  hasTop?: boolean
}

export const ScreenContainer = styled(WideCol)<ScreenContainerProps>`
  padding: ${props => props.hasTop ?"130px 100px 100px 100px"  :"50px 100px 200px 100px"};
  gap: 56px;
  @media (max-width: 928px) {
    padding: ${props => props.hasTop ?"130px 50px 50px 50px"  :"50px"};
  }
  @media (max-width: 430px) {
    padding: ${props => props.hasTop ?"135px 30px 55px 30px"  :"55px 30px"};
    gap: 30px;
  }
`
