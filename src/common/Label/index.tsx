import React from "react"
import { RobotoText } from "@/common/Text"
import { LabelBox } from "@/common/Label/index.styled"
import { Colors } from "@/utils/Colors"


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