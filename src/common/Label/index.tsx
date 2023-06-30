import React from "react"
import { Colors } from "@/utils/Colors"
import { LabelBox } from "./index.styled"
import { RobotoText } from "../Text"


interface LabelProps{
    text?:string
}

const Label = ({text}:LabelProps)=>{
    return(
        <LabelBox bgc={Colors.PINK_100} p={5} h={20}>
            <RobotoText fs={10} fw={500} lh={20}>{text}</RobotoText>
        </LabelBox>
    )
}

export default Label