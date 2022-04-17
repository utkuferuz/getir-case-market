import styled from "styled-components";
import BasketIcon from "../../../styles/icons/basket";
import { theme } from "../../../styles/variables";

const Basket = () => {
  const totalPrice = "1400.00";

  return (
    <BasketWrapper>
      <BasketIcon />
      <Price>₺ {totalPrice}</Price>
    </BasketWrapper>
  );
};

const BasketWrapper = styled.div`
  display: flex;
  grid-column: 8 / 13;
  min-width: 130px;
  background-color: ${theme.color.dark};
  padding: 22px 24px;
  align-items: center;
  justify-self: end;
  gap: 8px;
  cursor: pointer;
  @media (min-width: ${theme.breakpoints.XL}) {
    grid-column: 11 / -1;
  }
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: white;
`;

export default Basket;
