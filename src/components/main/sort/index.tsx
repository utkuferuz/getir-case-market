import styled from "styled-components";
import { updateFilter } from "../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { SortDirection } from "../../../types/sortDirection";
import RadioDefaultIcon from "../../shared/icons/radioDefault";
import RadioSelectedIcon from "../../shared/icons/radioSelected";

type SortingOption = {
  key: SortDirection;
  text: string;
};

const sortingOptions: SortingOption[] = [
  { key: SortDirection.PRICE_ASCENDING, text: "Price low to high" },
  { key: SortDirection.PRICE_DESCENDING, text: "Price high to low" },
  { key: SortDirection.DATE_ASCENDING, text: "Old to new" },
  { key: SortDirection.DATE_DESCENDING, text: "New to old" },
];

const Sort = () => {
  const sortState = useAppSelector((s) => s.market.filter.sortBy);
  const dispatch = useAppDispatch();
  const onSortChanged = (direction: SortDirection) =>
    dispatch(updateFilter({ sortBy: direction }));
  const sortingItems = sortingOptions.map((option) => (
    <SortingListItem key={option.key} onClick={() => onSortChanged(option.key)}>
      {sortState === option.key ? <RadioSelectedIcon /> : <RadioDefaultIcon />}
      <span>{option.text}</span>
    </SortingListItem>
  ));
  return (
    <SortingWrapper>
      <Title>Sorting</Title>
      <SortingList>{sortingItems}</SortingList>
    </SortingWrapper>
  );
};

const SortingWrapper = styled.div`
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

const SortingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 184px;
  padding: 24px;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.02);
`;

const SortingListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
  span {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.16px;
    color: grey;
  }
`;

export default Sort;
