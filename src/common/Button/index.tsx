import styled from "styled-components"
import Button from "@mui/material/Button"
import { Colors } from "@/utils/Colors"

export const TextButton = styled(Button)`
  &.MuiButtonBase-root {
    align-self: center;
    width: 150px;
    height: 40px;
    border: 1px solid ${Colors.GRAY_900};
    color: ${Colors.GRAY_900};

    &:hover {
      border: 1px solid ${Colors.GREEN_900};
      background-color: rgb(0 181 168 / 10%);
    }
  }
`
