import styled from "styled-components"
import { WideCol } from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(WideCol)`
  padding: 165px 100px 144px 100px;
  background: ${Colors.WHITE};
  height: calc(100vh - 80px);
  gap: 48px;
`
