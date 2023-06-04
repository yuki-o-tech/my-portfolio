import styled from "styled-components"
import Box from "@/common/Box"

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 40px;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
  }
`
