import styled from "styled-components"
import Box from "@/common/Box"

export const ItemContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 102px;
  row-gap: 128px;
  @media (max-width: 928px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
