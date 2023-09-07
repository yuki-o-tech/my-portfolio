import styled, { css } from "styled-components"
import Box, { Col } from "@/common/Box"
import { TextButton } from "@/common/Button"
import { Colors } from "@/utils/Colors"

export const Container = styled(Col)`
  padding: 55px 100px 150px 100px;
  @media (max-width: 928px) {
    padding: 100px 50px 50px 50px;
  }
  @media (max-width: 430px) {
    padding: 55px 30px;
  }
`

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  @media (max-width: 928px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 430px) {
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
  width: 100%;
  background: ${Colors.GRAY_100};
  color: ${Colors.BLACK};
  font-size: 17px;
  font-family: Epilogue, sans-serif;
  line-height: 27px;
  padding: 20px 30px;
  border: unset;

  @media (max-width: 928px) {
  }

  @media (max-width: 430px) {
    width: 100%;
    padding-top: unset;
    padding: 16px;
  }
  :focus {
    outline: solid 2px ${Colors.GREEN_900};
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
  @media (max-width: 928px) {
    padding-top: 30px;
  }
`

export const Input = styled.input`
  ${commonFieldStyle}
  @media (max-width: 928px) {
    height: 50px;
  }
`

export const Textarea = styled.textarea`
  ${commonFieldStyle}
  height: 200px;
`

export const Button = styled(TextButton)`
  &.MuiButtonBase-root {
    background-color: ${Colors.WHITE};
    color: ${Colors.GREEN_900};
    border: 1px solid ${Colors.GREEN_900};
    font-family: Epilogue, sans-serif;
    font-weight: 600;
    font-size: 20px;
    padding: 25px 80px;
    align-self: start;
    text-transform: capitalize;

    &:hover {
      background-color: ${Colors.GREEN_900};
      color: ${Colors.WHITE};
      transition: transform 0.3s ease-in-out;
    }
  }
  &.MuiButtonBase-root&:disabled {
    background-color: ${Colors.GRAY_900};
    color: ${Colors.WHITE};
    border: 1px solid ${Colors.GRAY_900};
    cursor: not-allowed;
    pointer-events: auto;
  }
  &:active {
    transition: transform 0.3s ease-in-out;
  }
  @media (max-width: 928px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
    padding: unset;
  }
`
