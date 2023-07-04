import React from "react"
import Link from "next/link"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/css/bundle'
import Box from "@/common/Box"
import Text from "@/common/Text"
import TitleScreenContainer from "@/common/TitleScreenContainer"
import ImageCard from "@/common/ImageCard"
import { SectionContainer, SwiperBox } from "@/components/WorkScreen/index.styled"
import { workData } from "@/components/WorkScreen/workData"
import { TextButton } from "@/common/Button"


SwiperCore.use([Pagination, Navigation])

const WorkScreen = () => {
  const images = ["/currencyExchangeApp.jpg", "/leaflets/hisatomiSaga.jpg", "/leaflets/hisatomiTokyo.jpg", "/leaflets/medical.jpg", "/leaflets/woodPrint.jpg"]
  return (
    <SectionContainer>
      <Text fs={32} fw={600} lh={32}>
        Work
      </Text>
      <SwiperBox className="swiperBox" >
        <Swiper
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
                  <Image src={src} layout="responsive" width={520} height={330} alt="works-items" />
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SwiperBox>
      <Link href="/works">
        <TextButton >More {">"}</TextButton>
      </Link>
    </SectionContainer>
  )
}

export default WorkScreen
