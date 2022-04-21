import styled from "styled-components";
import { theme } from "../../styles/variables";

const Footer = () => {
  return (
    <FooterWrapper>
      <span>&#169;2019 Market</span>
      <span>•</span>
      <span>Privacy Policy</span>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 14px;
  color: ${theme.color.primary};
  font-size: 14px;
  margin-top: 138px;
  margin-bottom: 40px;
`;

export default Footer;
