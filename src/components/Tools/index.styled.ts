import Box from "src/common/Box"
import styled from "styled-components"

export const ItemContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 102px;
  row-gap: 128px;
`
