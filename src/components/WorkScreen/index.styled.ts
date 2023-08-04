import styled from "styled-components"
import Box, { WideCol } from "@/common/Box"

export const SectionContainer = styled(WideCol)`
  text-align: center;
  padding-bottom: 100px;
`

export const SwiperBox = styled(Box)`
  text-align: -webkit-center;
  padding: 50px 180px;
  @media (max-width: 1280px) {
    padding: 50px;
  }
  @media (max-width: 430px) {
    padding: 50px 30px;
  }
`

//TODO delete
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
  @media (max-width: 430px) {
    column-gap: 65px;
    row-gap: 65px;
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
