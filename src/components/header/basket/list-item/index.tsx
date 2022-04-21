import styled from "styled-components";
import { addCartItem, removeCartItem } from "../../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { theme } from "../../../../styles/variables";
import { Product } from "../../../../types/product";
import Minus from "../../../shared/icons/minus";
import Plus from "../../../shared/icons/plus";

type Props = {
  product: Product;
};

const BasketListItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.market.cart.items);
  const itemCount = cartItems.find((i) => i.item.slug == product.slug)?.count;
  const localizedPrice = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(product.price);
  return (
    <BasketItemWrapper>
      <Name>{product.name}</Name>
      <Price>₺{localizedPrice}</Price>
      <AmountWrapper>
        <Button onClick={() => dispatch(removeCartItem(product))}>
          <Minus />
        </Button>
        <ItemCount>{itemCount}</ItemCount>
        <Button onClick={() => dispatch(addCartItem(product))}>
          <Plus />
        </Button>
      </AmountWrapper>
    </BasketItemWrapper>
  );
};

const BasketItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 4px;
  user-select: none;
  margin: 20px 20px;
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${theme.color.grayscale700};
`;

const Price = styled.div`
  grid-row: 2;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.color.primary};
`;

const AmountWrapper = styled.div`
  grid-column: 2;
  grid-row: span 2;
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: center;
`;

const Button = styled.button`
  display: grid;
  place-items: center;
  appearance: none;
  border: none;
  background: none;
  padding: 4px;
  cursor: pointer;
`;

const ItemCount = styled.div`
  display: grid;
  place-items: center;
  background-color: ${theme.color.primary};
  color: white;
  width: 32px;
  height: 32px;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;

export default BasketListItem;
