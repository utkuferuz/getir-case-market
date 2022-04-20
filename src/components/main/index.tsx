import { useEffect, useState } from "react";
import styled from "styled-components";
import { productService } from "../../services/productService";
import { useAppSelector } from "../../store/hooks";
import { FilterState } from "../../store/states/filter";
import { theme } from "../../styles/variables";
import { Product } from "../../types/product";
import Filter from "./filter";
import { FilterItem } from "./filter/types";
import ProductItem from "./products/product";
import ProductTypes from "./products/types";
import Sort from "./sort";

const prepareQueryFilter = (filterState: FilterState) => {
  const prepareList = (list?: FilterItem[]) => {
    const excludedList = list?.filter((i) => i.id !== "all");
    const isAllIncluded = excludedList?.length !== list?.length;
    return isAllIncluded ? [] : excludedList?.map((i: any) => i.id).join(",");
  };
  const [sort, order] = filterState.sortBy ? filterState.sortBy.split("_") : [];
  return [
    { key: "_sort", value: sort },
    { key: "_order", value: order },
    { key: "_start", value: filterState.pagination?.index },
    { key: "_limit", value: filterState.pagination?.items },
    { key: "itemType_like", value: filterState.productType },
    { key: "tags_like", value: prepareList(filterState.tags) },
    {
      key: "manufacturer_like",
      value: prepareList(filterState.brands),
    },
  ];
};

const Main = () => {
  const filterState = useAppSelector((s) => s.market.filter);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    const params = prepareQueryFilter(filterState);
    const fetchProducts = async () => {
      const data = await productService.getProducts(params);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, [filterState]);
  return (
    <MainWrapper>
      <SideWrapper>
        <Sort />
        <Filter
          type="brands"
          defaultOptions={[{ id: "all", name: "All" }]}
        ></Filter>
        <Filter
          type="tags"
          defaultOptions={[{ id: "all", name: "All" }]}
        ></Filter>
      </SideWrapper>
      <ProductsWrapper>
        <Title>Products</Title>
        <ProductTypes></ProductTypes>
        <ProductList>
          {filteredProducts.map((p) => (
            <ProductItem
              key={p.slug}
              slug={p.slug}
              imageUrl={p.image}
              price={p.price}
              name={p.name}
              isAdded={false}
            ></ProductItem>
          ))}
        </ProductList>
      </ProductsWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  height: 100%;
  @media (min-width: ${theme.breakpoints.MD}) {
    gap: 16px;
  }
  @media (min-width: ${theme.breakpoints.XL}) {
    grid-template-columns: repeat(12, 88px);
  }
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  grid-column: 2 / -2;
  @media (min-width: ${theme.breakpoints.LG}) {
    grid-column: 2 / span 3;
  }
  @media (min-width: ${theme.breakpoints.XL}) {
    grid-column: 1 / span 3;
  }
`;

const ProductsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
  grid-column: 2 / -2;
  @media (min-width: ${theme.breakpoints.MD}) {
    margin-top: 38px;
  }
  @media (min-width: ${theme.breakpoints.LG}) {
    grid-column: 5 / span 6;
  }
  @media (min-width: ${theme.breakpoints.XL}) {
    grid-column: 4 / span 6;
  }
`;

const ProductList = styled.div`
  display: grid;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.02);
  border-radius: 2px;
  padding: 20px;
  width: max-content;
  grid-template-columns: repeat(2, max-content);
  column-gap: 24px;
  row-gap: 20px;
  @media (min-width: ${theme.breakpoints.SM}) {
    grid-template-columns: repeat(3, max-content);
  }
  @media (min-width: ${theme.breakpoints.MD}) {
    grid-template-columns: repeat(4, max-content);
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${theme.color.grayscale500};
`;

export default Main;
