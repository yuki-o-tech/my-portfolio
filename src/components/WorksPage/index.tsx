import React from "react"
import Image from "next/image"
import Button from "@mui/material/Button"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import Box, { Col } from "@/common/Box"
import Text from "@/common/Text"
import { uiuxworksData, leafletsWorksData } from "@/components/WorksPage/worksPageData"
import { FigmaButton, ImageContainer, BaseText } from "@/components/WorksPage/index.styled"
import { Colors } from "@/utils/Colors"

interface TextProps {
    leftText: string
    rightText: string
}

type WorkData = {
    image: string;
    link?: string;
    [key: string]: string | undefined;
};

interface WorksBoxProps {
    workData: WorkData;
}

const TextBox = ({ leftText, rightText }: TextProps) => {
    const textProps = {
        fs: 16,
        color: Colors.BLACK,
        lh: 27,
        fw: 400,

    }
    return (
        <Box maxW={1040}>
            <Text {...textProps} w={150}>■{leftText}:</Text>
            <BaseText {...textProps} >{rightText}</BaseText>
        </Box>
    )
}


const WorksBox = ({ workData }: WorksBoxProps) => {
    return (
        <>
            <Col pt={80} pb={20}>
                {Object.entries(workData).map(([key, value], index) => {
                    if (key !== "image" && key !== "link") {
                        return <TextBox key={index} leftText={key} rightText={value as string} />
                    }
                })}
            </Col>
            {workData.link ?
                <FigmaButton onClick={() => window.open(workData.link, '_blank')} variant="outlined">Go to Figma</FigmaButton>
                : null
            }
        </>
    )
}

const WorksPageLayout = () => {
    return (
        <Col>
            <TitleScreenContainer title="UI/UX design" hasTop>
                {uiuxworksData.map((work, index) => (
                    <Col key={index} centerAlign>
                        <ImageContainer>
                            <Image src={`/${work.image}`} alt="work image" layout="responsive" width={1040} height={520} />
                        </ImageContainer>
                        <WorksBox workData={work} />
                    </Col>
                ))}

            </TitleScreenContainer>
            <TitleScreenContainer title="Other design" >
                {leafletsWorksData.map((work, index) => (
                    <Col key={index} centerAlign>
                        <ImageContainer>
                            <Image src={`/${work.image}`} alt="work image" layout="responsive" width={1040} height={520} />
                        </ImageContainer>
                        <WorksBox workData={work} />
                    </Col>
                ))}
                <Button
                    component="a"
                    href={"/"}
                    color="secondary"
                    size="large"
                >
                    Back
                </Button>
            </TitleScreenContainer>
        </Col>
    )
}

export default WorksPageLayout