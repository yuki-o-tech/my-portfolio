import React from "react"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { IconBox, ItemContainer } from "@/components/ToolsScreen/index.styled"
import { toolData } from "@/components/ToolsScreen/toolData"

export interface ItemProps {
  icon: () => JSX.Element
}

const ToolsScreen = () => {
  return (
    <TitleScreenContainer title="Tools">
      <ItemContainer>
        {toolData.map((el, index) => {
          return <IconBox key={index}>{el.icon()}</IconBox>
        })}
      </ItemContainer>
    </TitleScreenContainer>
  )
}

export default ToolsScreen
