import styled from "styled-components"
import Button from "@mui/material/Button"
import Box from "@/common/Box";
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"


export const ImageContainer = styled(Box)`
  width: 100%;
  max-width: 1040px;
`;

export const FigmaButton = styled(Button)`
text-transform: uppercase, 
color: ${Colors.BLACK}; 
`

export const BaseText = styled(Text)`
width: 100%;
`