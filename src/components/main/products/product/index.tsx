import styled from "styled-components";
import { theme } from "../../../../styles/variables";

type Props = {
  slug: string;
  name: string;
  price: number;
  isAdded: boolean;
  imageUrl: string;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(price);
};

const ProductItem = ({ slug, name, price, isAdded, imageUrl }: Props) => {
  const localizedPrice = formatPrice(price);
  const removeItem = () => {};
  const addItem = () => {};
  return (
    <ProductContainer>
      <Image>
        <img src="https://picsum.photos/200" alt={name} />
      </Image>
      <Price>
        <span>₺</span> <span>{localizedPrice}</span>
      </Price>
      <Name>{name}</Name>
      <Button
        className={isAdded ? "existing-item" : ""}
        onClick={() => (isAdded ? removeItem() : addItem())}
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
  border: 1.18px solid #f3f0fe;
  img {
    object-fit: cover;
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
  appearance: none;
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
    background-color: #5d3ebc;
  }
`;

export default ProductItem;
