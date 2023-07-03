import React from "react"
import Image from "next/image"
import Button from "@mui/material/Button"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import Box, { Col } from "@/common/Box"
import Text from "@/common/Text"
import { currencyExchangeData, workElementTitles } from "@/components/WorksPage/worksPageData"
import { FigmaButton, ImageContainer, BaseText } from "@/components/WorksPage/index.styled"

interface TextProps {
    leftText: string
    rightText: string
}
interface WorksBoxProps {
    rightTextData: string[]
    href: string
}

const TextBox = ({ leftText, rightText }: TextProps) => {
    const textProps = {
        fs: 16,
        color: "#2D2D2D",
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

const WorksBox = ({ rightTextData, href }: WorksBoxProps) => {
    return (
        <>
            <Col pt={80} pb={20}>
                {rightTextData.map((rightText, index) => (
                    <TextBox key={index} leftText={workElementTitles[index]} rightText={rightText} />
                ))}
            </Col>
            <FigmaButton
                onClick={() => window.open(href, '_blank')}
                variant="outlined"
            >
                Go to Figma
            </FigmaButton>
        </>
    )
}

const WorksPageLayout = () => {
    return (
        <TitleScreenContainer title="Works" hasTop>
            <Col centerAlign>
                <ImageContainer>
                    <Image src="/currencyExchangeApp.jpg" alt="image" layout="responsive" width={1040} height={520} />
                </ImageContainer>
                <WorksBox rightTextData={currencyExchangeData} href=
                    "https://www.figma.com/proto/p7kHdH2mw5AydtOZ9uEX29/Crypto-calculator-App?page-id=0%3A1&type=design&node-id=20-611&viewport=-341%2C248%2C0.81&scaling=scale-down&starting-point-node-id=20%3A611&show-proto-sidebar=1"
                />
            </Col>
            <Button
                component="a"
                href={"/"}
                // variant="outlined"
                color="secondary"
            >
                Back
            </Button>
        </TitleScreenContainer>
    )
}

export default WorksPageLayout






