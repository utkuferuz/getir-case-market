import styled from "styled-components";
import { theme } from "../../../styles/variables";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  height: 100%;
  gap: 16px;
  @media (min-width: ${theme.breakpoints.XL}) {
    grid-template-columns: repeat(12, 88px);
  }
`;

export default Container;
