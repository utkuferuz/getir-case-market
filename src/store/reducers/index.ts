import { createReducer } from "@reduxjs/toolkit";
import { onFilterChanged, updateProducts } from "../actions";
import { AppState } from "../states/appState";
import { SortDirection } from "../states/sortDirection";
import { Status } from "../states/status";

const initialState: AppState = {
  data: [],
  status: Status.Pending,
  filters: {
    productType: "mug",
    brands: [],
    tags: [],
    sortBy: SortDirection.PRICE_ASCENDING,
    pagination: {
      index: 1,
      items: 16,
    },
  },
  productTypes: {
    data: [],
    status: Status.Pending,
  },
  brands: {
    data: [],
    status: Status.Pending,
  },
  tags: {
    data: [],
    status: Status.Pending,
  },
  productCount: 0,
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(onFilterChanged, (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    })
    .addCase(updateProducts, (state, action) => {
      state.data = action.payload;
    });
});

const products = {
  reducer: productsReducer,
  actions: {
    onFilterChanged,
    updateProducts,
  },
};

export default products;
