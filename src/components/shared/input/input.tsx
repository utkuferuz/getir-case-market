import styled from "styled-components";
import { theme } from "../../../styles/variables";

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  color: ${theme.color.grayscale500};
`;

export default Input;
