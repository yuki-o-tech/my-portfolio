import styled from "styled-components"
import { WideCol } from "@/common/Box"
import Text from "@/common/Text"
import { Colors } from "@/utils/Colors"

export const Container = styled(WideCol)`
  padding: 165px 100px 144px 100px;
  background: ${Colors.WHITE};
  height: calc(100vh - 80px);
  gap: 48px;
  @media (max-width: 390px) {
    padding: 100px 30px 55px 30px;
    gap: unset;
    height: 700px;
  }
`
export const SubTitle = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 390px) {
    width: 200px;
    font-size: 16px;
    padding-bottom: 20px;
    line-height: 22px;
  }
`

export const Title = styled(Text)`
  width: 665px;
  font-size: 100px;
  font-weight: 600;
  @media (max-width: 390px) {
    width: 100%;
    font-size: 60px;
    line-height: 66px;
    padding-bottom: 50px;
  }
`

export const Description = styled(Text)`
  width: 530px;
  font-size: 17px;
  font-weight: 400;
  @media (max-width: 390px) {
    width: 100%;
    font-size: 14px;
  }
`
