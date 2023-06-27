import React from "react"
import Link from "next/link"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import ImageCard from "@/common/ImageCard"
import { Container } from "@/components/ClientScreen/index.styled"
import { clientData } from "@/components/ClientScreen/clientData"

const ClientScreen = () => {
  return (
    <TitleScreenContainer title="Clients">
      <Container>
        {clientData.map((el, index) => {
          return (
            <div key={index}>
              <Link href={el.link} target="_blank">
                <ImageCard
                  src={el.src}
                  title={el.title}
                  description={el.description}
                  hasLink
                  imageHeight={270}
                />
              </Link>
            </div>
          )
        })}
      </Container>
    </TitleScreenContainer>
  )
}

export default ClientScreen
