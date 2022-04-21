import styled from "styled-components";
import { addCartItem, removeCartItem } from "../../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Cart } from "../../../../store/states/cart";
import { theme } from "../../../../styles/variables";
import { Product } from "../../../../types/product";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const localizedPrice = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(product.price);
  const dispatch = useAppDispatch();
  const cartState = useAppSelector<Cart>((s) => s.market.cart);
  const isAdded = cartState.items.some((i) => i.item.slug === product.slug);
  return (
    <ProductContainer>
      <Image>
        <img src={product.image} alt={product.name} />
      </Image>
      <Price>
        <span>₺</span> <span>{localizedPrice}</span>
      </Price>
      <Name>{product.name}</Name>
      <Button
        className={isAdded ? "existing-item" : ""}
        onClick={() =>
          isAdded
            ? dispatch(removeCartItem(product))
            : dispatch(addCartItem(product))
        }
      >
        {isAdded ? "Remove" : "Add"}
      </Button>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: grid;
  width: 124px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto) 1fr;
  gap: 8px;
`;

const Image = styled.figure`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: #fefefe;
  padding: 16px;
  border: 1px solid #f3f0fe;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.color.primary};
  text-align: left;
  span {
    font-weight: 400;
  }
`;

const Name = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const Button = styled.button`
  border: none;
  background: none;
  border-radius: 2px;
  padding: 1px 0;
  color: white;
  background-color: ${theme.color.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  height: max-content;
  align-self: end;
  &.existing-item {
    background-color: #6d5edd;
  }
`;

export default ProductItem;
