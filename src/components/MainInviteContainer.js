import styled from "styled-components";
import mainCenterImage from "../assets/images/main_center_image.png";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function MainInviteContainer() {
  return (
    <MainCenterContent>
      <div>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOutDown"
          duration={0.7}
        >
          <MainInviteTextEn>
            We warmly invite you, our cherished guest.
          </MainInviteTextEn>
          <MainInviteTextKo>소중한 당신을 초대합니다.</MainInviteTextKo>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOutDown"
        duration={0.7}
      >
        <MainCenterImage src={mainCenterImage} alt="MainCenter" />
      </ScrollAnimation>
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

const MainInviteTextEn = styled.div`
  margin-top: 36px;
  font-family: Francisco, sans-serif;
  font-size: 18px;
  color: rgb(220, 200, 200);
  text-align: center;
`;

const MainInviteTextKo = styled.div`
  font-family: KNPSKkomi, sans-serif;
  font-size: 20px;
  color: rgb(200, 180, 180);
  text-align: center;
`;

const MainCenterImage = styled.img`
  max-width: 60px;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 70px;
`;
