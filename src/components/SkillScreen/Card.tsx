import React from "react"
import Box from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"
import { CardContainer } from "@/components/SkillScreen/index.styled"

export interface CardProps {
  icon: () => JSX.Element
  title: React.ReactNode
  description: string
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <CardContainer gap={42} p={40}>
      <Box h={100} centerAlign>
        {icon()}
      </Box>
      <Text fs={27} fw={600} lh={30} color={Colors.BLACK} center h={60}>
        {title}
      </Text>
      <Text fs={16} fw={400} lh={27} color={Colors.BLACK} center>
        {description}
      </Text>
    </CardContainer>
  )
}

export default Card
