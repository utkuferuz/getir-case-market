import styled from "styled-components";
import { updateFilter } from "../../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { theme } from "../../../../styles/variables";
import { FilterItem } from "../../filter/types";

const ProductTypes = () => {
  const dispatch = useAppDispatch();
  const productTypes = useAppSelector((s) => s.market.productTypes);
  const selectedType = useAppSelector((s) => s.market.filter.productType);
  const onItemClicked = (item: FilterItem) => {
    dispatch(updateFilter({ productType: item.id }));
  };
  return (
    <ProducTypeList>
      {productTypes.data.map((p) => (
        <ProductTypeItem
          className={selectedType === p.id ? "selected" : ""}
          key={p.id}
          onClick={() => onItemClicked(p)}
        >
          {p.name}
        </ProductTypeItem>
      ))}
    </ProducTypeList>
  );
};

const ProducTypeList = styled.div`
  display: flex;
  gap: 8px;
`;

const ProductTypeItem = styled.div`
  border-radius: 2px;
  background: #f2f0fd;
  color: ${theme.color.primary};
  cursor: pointer;
  padding: 6px 16px;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-transform: lowercase;
  &.selected {
    background: ${theme.color.primary};
    color: #f2f0fd;
  }
`;

export default ProductTypes;
