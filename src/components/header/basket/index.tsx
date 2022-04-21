import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import BasketIcon from "../../../styles/icons/basket";
import { theme } from "../../../styles/variables";

const Basket = () => {
  const cartState = useAppSelector((s) => s.market.cart);
  const total = cartState.items.reduce(
    (total, current) => total + current.item.price * current.count,
    0
  );
  const totalText = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(total);
  return (
    <BasketWrapper>
      <BasketIcon />
      <Price>₺ {totalText}</Price>
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
