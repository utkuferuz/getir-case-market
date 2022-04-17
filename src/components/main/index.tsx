import styled from "styled-components";
import { SortDirection } from "../../store/states/sortDirection";
import { theme } from "../../styles/variables";
import Container from "../shared/container";
import Sort from "./sort";

const Main = () => {
  const defaultSort = SortDirection.PRICE_ASCENDING;

  return (
    <MainWrapper>
      <Container>
        <SideWrapper>
          <Sort direction={defaultSort}></Sort>
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
