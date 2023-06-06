import styled, { css } from "styled-components"
import Box, { Col } from "@/common/Box"
import { Colors } from "@/utils/Colors"

export const Container = styled(Col)`
  padding: 55px 100px 150px 100px;
  @media (max-width: 390px) {
    padding: 55px 30px;
  }
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
    row-gap: 48px;
  }
`

export const IconBox = styled(Box)`
  align-items: center;
`

const commonFieldStyle = css`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 530px;
  background: ${Colors.GRAY_100};
  color: ${Colors.BLACK};
  font-size: 17px;
  font-family: Epilogue, sans-serif;
  line-height: 27px;
  padding: 20px 30px;
  border: unset;
  @media (max-width: 390px) {
    width: 100%;
  }
  :focus {
    outline: solid 2px ${Colors.GREEN};
  }
  &input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${Colors.GRAY_100} inset !important;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 20px;
`

export const Input = styled.input`
  ${commonFieldStyle}
`

export const Textarea = styled.textarea`
  ${commonFieldStyle}
  height: 12rem;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: 80px;
  background: ${Colors.GREEN};
  color: ${Colors.WHITE};
  font-family: Epilogue, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  padding: 25px 80px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: ${Colors.ORANGE};
    color: ${Colors.WHITE};
    transition: transform 0.3s ease-in-out;
  }
  :disabled {
    background: ${Colors.GRAY_900};
    cursor: not-allowed;
  }
  :active {
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: 390px) {
    width: 180px;
    height: 50px;
    font-size: 16px;
    padding: unset;
  }
`
