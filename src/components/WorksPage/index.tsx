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
  AspectRatioBox,
} from "@/components/WorksPage/index.styled"
import GithubIcon from "@/icons/GithubIcon"
import DarkFigmaIcon from "@/icons/Logos/DarkFigmaIcon"
import { Colors } from "@/utils/Colors"

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
    <WideBox>
      <Text {...textProps} w={200}>
        ■{leftText}:
      </Text>
      <BaseText {...textProps}>{rightText}</BaseText>
    </WideBox>
  )
}

const renderLinkButton = (
  icon: React.ReactNode,
  buttonText: string,
  link?: string
) => {
  if (!link) return null
  return (
    <LinkButton
      onClick={() => window.open(link, "_blank")}
      variant="outlined"
      startIcon={icon}
    >
      {buttonText}
    </LinkButton>
  )
}

const WorksBox = ({ workData }: WorksBoxProps) => {
  const filteredDataEntries = Object.entries(workData).filter(
    ([key]) => !["image", "link", "githubLink"].includes(key)
  )
  return (
    <WideCol maxW={1040}>
      <Col pt={80} pb={20}>
        {filteredDataEntries.map(([key, value], index) => (
          <TextBox key={index} leftText={key} rightText={value as string} />
        ))}
      </Col>
      <Center gap={20}>
        {renderLinkButton(<GithubIcon />, "Go to Github", workData.githubLink)}
        {renderLinkButton(<DarkFigmaIcon />, "Go to Figma", workData.link)}
      </Center>
    </WideCol>
  )
}

const WorksPageLayout = () => {
  return (
    <Col>
      <TitleScreenContainer title="Personal Development & UI/UX design" hasTop>
        {myWorksData.map((work, index) => (
          <WideCol key={index} centerAlign pb={30}>
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
                <AspectRatioBox bgc={Colors.GRAY_300}>
                  <Text fs={30} color={Colors.WHITE}>
                    No image
                  </Text>
                </AspectRatioBox>
              )}
            </ImageContainer>
            <WorksBox workData={work} />
          </WideCol>
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
