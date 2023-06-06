import React, { ReactNode } from "react"
import Text from "@/common/Text"
import { ScreenContainer } from "@/common/TitleScreenContainer/index.styled"

interface TitleScreenContainerProps {
  title: string
  children: ReactNode
}

const TitleScreenContainer = ({
  title,
  children,
}: TitleScreenContainerProps) => {
  return (
    <ScreenContainer centerAlign>
      <Text fs={32} fw={600} lh={32}>
        {title}
      </Text>
      {children}
    </ScreenContainer>
  )
}

export default TitleScreenContainer
