import styled from "styled-components";
import { theme } from "../../styles/variables";
import Container from "../shared/container";
import Filter from "./filter";
import Sort from "./sort";

const Main = () => {
  return (
    <MainWrapper>
      <Container className="main-container">
        <SideWrapper>
          <Sort />
          <Filter
            type="brands"
            defaultOptions={[{ id: "all", name: "All" }]}
          ></Filter>
          <Filter
            type="tags"
            defaultOptions={[{ id: "all", name: "All" }]}
          ></Filter>
        </SideWrapper>
      </Container>
    </MainWrapper>
  );
};

const MainWrapper = styled.main``;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  grid-column: 2 / -2;
  @media ${theme.breakpoints.LG} {
    grid-column: 2 / span 3;
  }
  @media ${theme.breakpoints.XL} {
    grid-column: 1 / span 3;
  }
`;

export default Main;
