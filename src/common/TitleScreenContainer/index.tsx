import React, { ReactNode } from "react"
import { WideCol } from "../Box"
import Text from "../Text"

interface TitleScreenContainerProps {
  title: string
  children: ReactNode
}

const TitleScreenContainer = ({
  title,
  children,
}: TitleScreenContainerProps) => {
  return (
    <WideCol pl={100} pr={100} pt={50} pb={50} gap={56} centerAlign>
      <Text fs={32} fw={600} lh={32}>
        {title}
      </Text>
      {children}
    </WideCol>
  )
}

export default TitleScreenContainer
