import Box from "src/common/Box"
import styled from "styled-components"

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }
`
