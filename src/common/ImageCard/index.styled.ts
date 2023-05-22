import styled from "styled-components"
import { Col, WideBox } from "@/common/Box"

interface ContainerProps {
  hasLink: boolean
}

export const CardContainer = styled(Col)<ContainerProps>`
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
  :hover {
    ${props => (props.hasLink ? "cursor: pointer;" : null)}
  }
`
