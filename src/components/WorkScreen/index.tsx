import React from "react"
import Link from "next/link"
import Image from "next/image"
import { SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"
import "swiper/css/bundle"
import Box from "@/common/Box"
import Text from "@/common/Text"
import { TextButton } from "@/common/Button"
import {
  SectionContainer,
  SwiperBox,
  SwiperDetail,
} from "@/components/WorkScreen/index.styled"

SwiperCore.use([Pagination, Navigation])

const WorkScreen = () => {
  const images = [
    "/portfolio.jpg",
    "/currencyExchangeApp.jpg",
    "/hisatomiSaga.jpg",
    "/hisatomiTokyo.jpg",
    "/medical.jpg",
    "/woodPrint.jpg",
  ]
  return (
    <SectionContainer>
      <Text fs={32} fw={600} lh={32}>
        My Works
      </Text>
      <SwiperBox className="swiperBox">
        <SwiperDetail
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation
          loop={true}
        >
          {images.map((src: string, index: number) => {
            return (
              <SwiperSlide key={`${index}`}>
                <Box maxW={520}>
                  <Image
                    src={src}
                    layout="responsive"
                    width={520}
                    height={330}
                    alt="works-items"
                  />
                </Box>
              </SwiperSlide>
            )
          })}
        </SwiperDetail>
      </SwiperBox>
      <Link href="/works">
        <TextButton className="MuiButton" variant="outlined">
          More
        </TextButton>
      </Link>
    </SectionContainer>
  )
}

export default WorkScreen
