import React from "react"
import { RobotoText } from "@/common/Text"
import { LabelBox } from "@/common/Label/index.styled"
import { Colors } from "@/utils/Colors"

interface LabelProps {
  text?: string
}

const Label = ({ text }: LabelProps) => {
  return (
    <LabelBox bgc={Colors.PINK_300} p={8} h={30}>
      <RobotoText fs={12} fw={500} lh={20} color={Colors.PINK_800}>
        {text}
      </RobotoText>
    </LabelBox>
  )
}

export default Label
