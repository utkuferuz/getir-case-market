import { useEffect, useState } from "react";
import styled from "styled-components";
import { updateFilter } from "../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import CheckBoxDefault from "../../shared/icons/checkBoxDefault";
import CheckBoxSelected from "../../shared/icons/checkBoxSelected";
import { theme } from "../../../styles/variables";
import Input from "../../shared/input/input";
import { FilterItem, filterTypes } from "./types";
import { Status } from "../../../types/status";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  defaultOptions: FilterItem[];
  type: "brands" | "tags";
};

const updateCheckedItems = (
  items: FilterItem[],
  item: FilterItem
): FilterItem[] => {
  const temp = items ? [...items] : [];
  const excludedItems = temp.filter((o) => o.id !== item.id);
  if (excludedItems.length === temp.length) {
    excludedItems.push(item);
  }
  return excludedItems;
};

const Filter = ({ type, defaultOptions }: Props) => {
  const dispatch = useAppDispatch();
  const filterOptions = useAppSelector<FilterItem[]>(
    (s) => s.market[type].data
  );
  const checkedOptions = useAppSelector((s) => s.market.filter[type]);
  const loadingStatus = useAppSelector<Status>((s) => s.market.status);
  const [options, setOptions] = useState<FilterItem[]>(filterOptions);
  const filter = filterTypes.find((o) => o.type === type);
  const productCount = filterOptions.reduce(
    (total, next) => total + (next.productCount || 0),
    0
  );
  const defaultOption = defaultOptions.find((o) => o.id === "all");
  if (defaultOption) {
    defaultOption.productCount = productCount;
  }
  const onItemClicked = (item: FilterItem) => {
    const temp = checkedOptions ? [...checkedOptions] : [];
    const refreshedItems = updateCheckedItems(temp, item);
    let tempFilter: any = {};
    tempFilter[type] = refreshedItems;
    dispatch(updateFilter(tempFilter));
  };
  const items = [...defaultOptions, ...options];
  const listItems = items.map((item) => (
    <FilterListItem key={item.id} onClick={() => onItemClicked(item)}>
      {checkedOptions?.some((i) => i.id === item.id) ? (
        <CheckBoxSelected />
      ) : (
        <CheckBoxDefault />
      )}
      <FilterName className="item-name">{item.name}</FilterName>
      <ProductCount className="item-count">({item.productCount})</ProductCount>
    </FilterListItem>
  ));
  useEffect(() => setOptions(filterOptions), [filterOptions]);
  return (
    <FilterWrapper>
      <Title>{filter?.title}</Title>
      <FilterContainer>
        <Input
          placeholder={filter?.placeholder}
          onChange={(e) =>
            setOptions(
              filterOptions.filter((x: any) =>
                x.name.toLowerCase().includes(e.target.value?.toLowerCase())
              )
            )
          }
        ></Input>
        {loadingStatus === Status.Loading ? (
          <ClipLoader
            css="margin-left: 65px;margin-top: 20px;"
            color={theme.color.primary}
            loading={true}
            size={100}
          ></ClipLoader>
        ) : (
          <FilterList>{listItems}</FilterList>
        )}
      </FilterContainer>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  color: grey;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 244px;
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.02);
  gap: 16px;
`;

const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const FilterListItem = styled.div`
  display: flex;
  width: max-content;
  gap: 8px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  .item-name {
    font-size: 14px;
    line-height: 18px;
    color: ${theme.color.grayscale600};
  }
  .item-count {
    font-size: 14px;
    line-height: 18px;
    color: ${theme.color.grayscale300};
  }
`;

const FilterName = styled.span``;

const ProductCount = styled.span``;

export default Filter;
