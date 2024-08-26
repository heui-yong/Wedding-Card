import styled from "styled-components";
import mainCenterImage from "../assets/images/main_center_image.png";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function MainLetterContainer() {
  return (
    <MainCenterContent>
      <div>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutDown"
          duration={0.7}
        >
          <MainCenterImage src={mainCenterImage} alt="MainCenter" />
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutDown"
          duration={0.7}
        >
          <MainInfoText>
            "엄마가 주는 사료를 열시미 먹고,
            <br /> 응가도 열시미해서 겨론을 하게되었어요"
          </MainInfoText>
          <MainInfoText>- 2024년 여름, 신랑 백리츄의 편지 中-</MainInfoText>
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutDown"
          duration={0.7}
        >
          <MainInfoText>
            "집에서 누워있었는데 오빠야가 갑자기
            <br /> 코딩 연습한다고 겨론 시켰어요"
          </MainInfoText>
          <MainInfoText>- 2024년 봄, 신부 이모찌의 편지 中-</MainInfoText>
        </ScrollAnimation>
      </div>
    </MainCenterContent>
  );
}

const MainCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* 가로 정렬을 위한 중앙 정렬 */
`;

const MainCenterImage = styled.img`
  max-width: 60px;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const MainInfoText = styled.div`
  margin-bottom: 36px;
  font-family: KNPSKkomi, sans-serif;
  font-size: 18px;
  color: gray;
  text-align: center;
`;
