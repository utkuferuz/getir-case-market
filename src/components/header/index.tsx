import Basket from "./basket";
import Logo from "./logo";
import styled from "styled-components";
import { theme } from "../../styles/variables";
import Container from "../shared/container";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <a href="/" className="market-logo">
          <Logo />
        </a>
        <Basket></Basket>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 76px;
  background-color: ${theme.color.primary};
  position: sticky;
  top: 0;
  .market-logo {
    color: white;
    place-self: center;
    grid-column: 1 / span 2;
  }
  .market-logo {
    grid-column: 2 / span 5;
    justify-self: start;
  }
  @media (min-width: ${theme.breakpoints.XL}) {
    .market-logo {
      grid-column: 6 / span 2;
    }
  }
`;

export default Header;
