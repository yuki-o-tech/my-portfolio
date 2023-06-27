import styled from "styled-components"
import { WideCol } from "@/common/Box"

export const ScreenContainer = styled(WideCol)`
  padding: 50px 100px 200px 100px;
  gap: 56px;
  @media (max-width: 928px) {
    padding: 50px;
  }
  @media (max-width: 430px) {
    padding: 55px 30px;
    gap: 30px;
  }
`
