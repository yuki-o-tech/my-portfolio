import styled from "styled-components"
import Box from "@/common/Box"

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 520px);
  column-gap: 40px;
  row-gap: 40px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 520px;
  }
`

export const ItemContainer = styled(Box)`
  &:hover {
    transform: translateY(-8px);
    transition: all 0.2s ease 0s;

    & * {
      transform: none !important;
      transition: none !important;
    }
  }
`
