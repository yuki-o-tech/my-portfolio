import styled from "styled-components"
import { TextButton } from "@/common/Button"
import { Center } from "@/common/Box"
import Text from "@/common/Text"

export const ImageContainer = styled(Center)`
  width: 100%;
  max-width: 1040px;
`

export const LinkButton = styled(TextButton)`
  &.MuiButtonBase-root {
    width: 160px !important;
  }
`

export const BaseText = styled(Text)`
  width: 100%;
`

export const AspectRatioBox = styled(Center)`
  width: 100%;
  padding: 25% 0;
`
