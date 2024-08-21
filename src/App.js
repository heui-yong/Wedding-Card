import styled from "styled-components";
import TopContainer from "./components/TopContainer";
import GlobalStyle from "./styles/GlobalStyles";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TopContainer />
        <MainContainer />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
