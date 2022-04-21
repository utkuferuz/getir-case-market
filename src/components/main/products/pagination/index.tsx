import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { updateFilter } from "../../../../store/actions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import ArrowLeft from "../../../shared/icons/arrowLeft";
import ArrowRight from "../../../shared/icons/arrowRight";
import Dots from "../../../shared/icons/dots";
import { theme } from "../../../../styles/variables";

type Props = {
  count: number;
};

const Pagination = ({ count }: Props) => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((s) => s.market.filter);
  const pageCount = Math.ceil(count / (filterState.pagination?.items || 16));
  const updateFilterState = (event: any) => {
    console.log({ event });
    dispatch(
      updateFilter({
        pagination: {
          index: event.selected + 1,
          items: filterState.pagination?.items,
        },
      })
    );
  };
  return (
    <PaginationWrapper>
      <PaginationContainer
        containerClassName="pagination-container"
        pageClassName="page"
        breakClassName="break"
        nextClassName="next"
        previousClassName="prev"
        breakLabel={<Dots />}
        previousLabel={<PreviousButton />}
        nextLabel={<NextButton />}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={(e) => updateFilterState(e)}
      />
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationContainer = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  align-items: center;
  max-width: 535px;
  align-self: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  user-select: none;
  .page {
    width: 32px;
    height: 40px;
    border-radius: 2px;
    cursor: pointer;
    color: ${theme.color.grayscale500};
    display: none;
    &.selected {
      color: white;
      background-color: ${theme.color.primary};
    }
    a {
      display: grid;
      place-items: center;
    }
  }
  .break {
    display: none;
  }
  .prev,
  .next {
    cursor: pointer;
    color: ${theme.color.primary};
    &.disabled {
      cursor: not-allowed;
      color: ${theme.color.grayscale500};
    }
  }
  .prev {
    margin-right: auto;
  }
  .next {
    margin-left: auto;
  }
  @media (min-width: ${theme.breakpoints.SM}) {
    .page {
      display: grid;
    }
    .break {
      display: list-item;
    }
  }
  @media (min-width: ${theme.breakpoints.MD}) {
    width: 100%;
  }
`;

type NavigationButtonProps = {
  direction: "prev" | "next";
};

const NavigationButton = styled.div<NavigationButtonProps>`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  order: ${(p) => (p.direction === "prev" ? -1 : 999999)};
`;

const PreviousButton = () => (
  <NavigationButton direction="prev">
    <ArrowLeft />
    <span>Prev</span>
  </NavigationButton>
);

const NextButton = () => (
  <NavigationButton direction="next">
    <span>Next</span>
    <ArrowRight />
  </NavigationButton>
);

export default Pagination;
