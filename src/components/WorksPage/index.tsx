import React from "react"
import Link from "next/link"
import Image from "next/image"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import { Center, Col, WideBox, WideCol } from "@/common/Box"
import { TextButton } from "@/common/Button"
import Text from "@/common/Text"
import {
  myWorksData,
  flyersWorksData,
} from "@/components/WorksPage/worksPageData"
import {
  LinkButton,
  ImageContainer,
  BaseText,
} from "@/components/WorksPage/index.styled"
import { Colors } from "@/utils/Colors"
import GithubIcon from "@/icons/GithubIcon"
import DarkFigmaIcon from "@/icons/Logos/DarkFigmaIcon"

interface TextProps {
  leftText: string
  rightText: string
}

type WorkData = {
  image?: string
  link?: string
  githubLink?: string
  [key: string]: string | undefined
}

interface WorksBoxProps {
  workData: WorkData
}

const TextBox = ({ leftText, rightText }: TextProps) => {
  const textProps = {
    fs: 16,
    color: Colors.BLACK,
    lh: 27,
    fw: 400,
  }
  return (
    <WideBox maxW={1040}>
      <Text {...textProps} w={200}>
        ■{leftText}:
      </Text>
      <BaseText {...textProps}>{rightText}</BaseText>
    </WideBox>
  )
}

const WorksBox = ({ workData }: WorksBoxProps) => {
  return (
    <WideCol>
      <Col pt={80} pb={20}>
        {Object.entries(workData).map(([key, value], index) => {
          if (key !== "image" && key !== "link" && key !== "githubLink") {
            return (
              <TextBox key={index} leftText={key} rightText={value as string} />
            )
          }
        })}
      </Col>
      <Center gap={20}>
        {workData.githubLink ? (
          <LinkButton
            onClick={() => window.open(workData.githubLink, "_blank")}
            variant="outlined"
            startIcon={<GithubIcon />}
          >
            Go to Github
          </LinkButton>
        ) : null}
        {workData.link ? (
          <LinkButton
            onClick={() => window.open(workData.link, "_blank")}
            variant="outlined"
            startIcon={<DarkFigmaIcon />}
          >
            Go to Figma
          </LinkButton>
        ) : null}
      </Center>
    </WideCol>
  )
}

const WorksPageLayout = () => {
  return (
    <Col>
      <TitleScreenContainer title="Personal Development & UI/UX design" hasTop>
        {myWorksData.map((work, index) => (
          <Col key={index} centerAlign pb={30}>
            <ImageContainer>
              {work.image ? (
                <Image
                  src={`/${work.image}`}
                  alt="work image"
                  layout="responsive"
                  width={1040}
                  height={520}
                />
              ) : (
                <Center w={1040} h={520} bgc={Colors.GRAY_300}>
                  <Text fs={30} color={Colors.WHITE}>
                    No image
                  </Text>
                </Center>
              )}
            </ImageContainer>
            <WorksBox workData={work} />
          </Col>
        ))}
      </TitleScreenContainer>
      <TitleScreenContainer title="Other design">
        {flyersWorksData.map((work, index) => (
          <Col key={index} centerAlign>
            <ImageContainer>
              <Image
                src={`/${work.image}`}
                alt="work image"
                layout="responsive"
                width={1040}
                height={520}
              />
            </ImageContainer>
            <WorksBox workData={work} />
          </Col>
        ))}
        <Link href="/">
          <TextButton variant="outlined">Back</TextButton>
        </Link>
      </TitleScreenContainer>
    </Col>
  )
}

export default WorksPageLayout
