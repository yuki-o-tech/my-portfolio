import styled from "styled-components"
import Button from "@mui/material/Button"
import { Colors } from "@/utils/Colors"


export const TextButton = styled(Button)`
align-self: center;
width:100px;
border: 1px solid ${Colors.BLACK};
color:${Colors.BLACK}; 
& > .MuiButton-root {
    :hover {
        background-color: red !important;
          
    }
}

`