import styled from "styled-components";
import mainImage from "../assets/images/main_image.gif";

export default function MainContainer() {
  return (
    <MainDiv>
      <MainImage src={mainImage} alt="Main" />
      <MainInfoText>
        2026년 10월 31일(토) 오후 1시
        <br /> 해운대 어디어디 2층 그랜드홀
      </MainInfoText>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  max-width: 350px;
  width: 100%;
  aspect-ratio: 9 / 16;
  height: auto;
`;

const MainInfoText = styled.div`
  margin-top: 36px;
  font-family: KNPSKkomi, sans-serif;
  font-size: 18px;
  color: gray;
  text-align: center;

  br {
    margin-bottom: 16px; /* 원하는 간격으로 조정 */
    display: block;
    content: "";
  }
`;
