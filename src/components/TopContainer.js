import styled from "styled-components";

export default function TopContainer() {
  return (
    <TopDiv>
      <TopTitleText>
        Join us in celebrating our wedding <br />
        and share in the joy!
      </TopTitleText>
      <NameDiv>
        <NameItemDiv>
          <EnNameText>lichu</EnNameText>
          <KoNameText>백 리 츄</KoNameText>
        </NameItemDiv>
        <VerticalLine />
        <NameItemDiv>
          <EnNameText>mozzi</EnNameText>
          <KoNameText>이 모 찌</KoNameText>
        </NameItemDiv>
      </NameDiv>
    </TopDiv>
  );
}

const TopDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopTitleText = styled.div`
  text-align: center;
  color: gray;
  font-weight: 500;
  font-family: Francisco, sans-serif;
  font-size: 24px;
`;

const NameDiv = styled.div`
  display: flex;
  margin-top: 36px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px; // NameDiv의 높이 설정
`;

const NameItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EnNameText = styled.div`
  font-family: Francisco, sans-serif;
  font-size: 30px;
  color: gray;
`;

const KoNameText = styled.div`
  font-family: KNPSKkomi, sans-serif;
  font-size: 18px;
  color: gray;
`;

const VerticalLine = styled.div`
  width: 1px; // 선의 두께
  background-color: gray; // 선의 색상
  height: 30px; // NameItemDiv의 높이만큼 수직선 그리기
  margin: 0 60px; // 텍스트와 수직선 사이에 여백 추가
`;
