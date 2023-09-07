import styled from "styled-components"
import { TextButton } from "@/common/Button"
import Box from "@/common/Box"
import Text from "@/common/Text"

export const ImageContainer = styled(Box)`
  width: 100%;
  max-width: 1040px;
`

export const LinkButton = styled(TextButton)`
  &.MuiButtonBase-root {
    width: 160px;
  }
`

export const BaseText = styled(Text)`
  width: 100%;
`
