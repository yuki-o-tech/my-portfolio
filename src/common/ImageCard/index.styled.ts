import styled from "styled-components"
import Image from "next/image"
import { Col } from "@/common/Box"

interface ContainerProps {
  hasLink: boolean
}

export const CardContainer = styled(Col)<ContainerProps>`
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
  :hover {
    ${props => (props.hasLink ? "cursor: pointer;" : null)}
  }
  @media (max-width: 928px) {
    width: 100%;
  }
`

export const ImageContainer = styled(Image)`
  width: 100%;
`
