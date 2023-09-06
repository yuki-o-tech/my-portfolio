import styled, { css, keyframes } from "styled-components"
import { WideCol } from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const animatedText = css`
  animation: ${slideUp} 0.5s ease-out;
`

export const Container = styled(WideCol)`
  padding: 165px 100px 144px 100px;
  height: calc(100vh - 80px);
  gap: 48px;

  @media (max-width: 928px) {
    padding: 130px 50px 50px 50px;
    gap: unset;
    height: 700px;
  }
  @media (max-width: 430px) {
    padding: 100px 30px 55px 30px;
  }
`

export const Background = styled(WideCol)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: calc(100vh - 80px);
  background: linear-gradient(
    135deg,
    ${Colors.WHITE},
    ${Colors.PINK_300},
    ${Colors.BLUE_300},
    ${Colors.GREEN_300},
    ${Colors.WHITE}
  );
  background-size: 200% 100%;
  animation: ${Gradient} 15s ease infinite;

  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 40%,
    black 40%,
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 40%,
    black 40%,
    transparent
  );
  @media (max-width: 928px) {
    padding: 130px 50px 50px 50px;
    gap: unset;
    height: 700px;
  }
  @media (max-width: 430px) {
    display: none;
  }
`

export const SubTitle = styled(Text)`
  font-weight: 600;
  font-size: 20px;

  ${animatedText}
  @media (max-width: 928px) {
    padding-bottom: 20px;
  }
  @media (max-width: 430px) {
    width: 200px;
    font-size: 16px;
    line-height: 22px;
  }
`

export const Title = styled(Text)`
  width: 665px;
  font-size: 100px;
  font-weight: 600;
  ${animatedText}
  @media (max-width: 928px) {
    width: 100%;
    font-size: 78px;
    padding-bottom: 50px;
  }
  @media (max-width: 430px) {
    font-size: 60px;
    line-height: 66px;
  }
`

export const Description = styled(Text)`
  width: 530px;
  font-size: 17px;
  font-weight: 400;
  ${animatedText}
  @media (max-width: 928px) {
    width: 100%;
    max-width: 530px;
    font-size: 14px;
  }
`
