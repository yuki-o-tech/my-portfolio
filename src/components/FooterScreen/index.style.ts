import Box, { Col } from "src/common/Box"
import styled from "styled-components"

export const Container = styled(Col)`
  padding: 55px 100px 150px 100px;
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
`
export const Input = styled.input`
  width: 530px;
  height: 70px;
  background: pink;
  ::placeholder {
    color: red;
  }
  :forcus {
    border-color: red;
  }
`
export const IconBox = styled(Box)`
  align-items: center;
`
