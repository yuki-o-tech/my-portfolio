import styled from "styled-components"
import { TextButton } from "@/common/Button"
import Box from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

export const ImageContainer = styled(Box)`
  width: 100%;
  max-width: 1040px;
`

export const FigmaButton = styled(TextButton)`
text-transform: uppercase, 
color: ${Colors.BLACK}; 

&:hover {
  border: 1px solid ${Colors.GREEN_900};
  background-color: rgb(0 181 168 / 10%);
}
`

export const BaseText = styled(Text)`
  width: 100%;
`
