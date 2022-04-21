import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import BasketIcon from "../../shared/icons/basket";
import { theme } from "../../../styles/variables";
import { Popover } from "react-tiny-popover";
import BasketItem from "./list-item";
import React, { useState } from "react";

const Basket = () => {
  const cartState = useAppSelector((s) => s.market.cart);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const total = cartState.items.reduce(
    (total, current) => total + current.item.price * current.count,
    0
  );
  const totalText = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(total);
  const basketItems = (
    <BasketList>
      {cartState.items.map((cartItem, i) => (
        <React.Fragment key={cartItem.item.slug}>
          <BasketItem product={cartItem.item}></BasketItem>
          <GrayLine></GrayLine>
        </React.Fragment>
      ))}
      {cartState.items.length > 0 && (
        <CheckoutButton>₺{totalText}</CheckoutButton>
      )}
    </BasketList>
  );
  return (
    <Popover
      isOpen={isPopoverOpen}
      padding={40}
      positions={["bottom"]}
      content={basketItems}
    >
      <BasketWrapper onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        <BasketIcon />
        <Price>₺ {totalText}</Price>
      </BasketWrapper>
    </Popover>
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

const BasketList = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 8px solid ${theme.color.primary};
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: white;
`;

export const CheckoutButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  padding: 16px 24px;
  color: ${theme.color.primary};
  border-radius: 2px;
  border: 2px solid ${theme.color.primary};
  margin: 10px 10px;
  width: max-content;
  align-self: flex-end;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const GrayLine = styled.div`
  border: 1px solid ${theme.color.grayscale50};
`;

export default Basket;
