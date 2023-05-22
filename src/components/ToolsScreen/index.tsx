import React from "react"
import Box from "@/common/Box"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { ItemContainer } from "@/components/ToolsScreen/index.styled"
import { toolData } from "@/components/ToolsScreen/toolData"

export interface ItemProps {
  icon: () => JSX.Element
}

const ToolsScreen = () => {
  return (
    <TitleScreenContainer title="Tools">
      <ItemContainer>
        {toolData.map((el, index) => {
          return <Box key={index}>{el.icon()}</Box>
        })}
      </ItemContainer>
    </TitleScreenContainer>
  )
}

export default ToolsScreen
