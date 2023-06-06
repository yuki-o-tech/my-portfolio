import styled from "styled-components"
import { WideCol } from "@/common/Box"

export const ScreenContainer = styled(WideCol)`
  padding: 50px 100px;
  gap: 56px;
  @media (max-width: 390px) {
    padding: 55px 30px;
    gap: 30px;
  }
`
