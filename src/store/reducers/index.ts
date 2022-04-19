import { createReducer } from "@reduxjs/toolkit";
import {
  updateBrands,
  updateBrandsInd,
  updateFilter,
  updateProducts,
  updateProductTypes,
  updateTags,
  updateTagsInd,
} from "../actions";
import { Market } from "../states/market";
import { SortDirection } from "../../types/sortDirection";
import { Status } from "../../types/status";
import { ProductType } from "../../types/productType";

const initialState: Market = {
  data: [],
  status: Status.Pending,
  filter: {
    productType: ProductType.MUG,
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

const marketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateFilter, (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    })
    .addCase(updateProducts, (state, action) => {
      state.data = action.payload;
    })
    .addCase(updateTags, (state, action) => {
      state.tags.data = action.payload;
    })
    .addCase(updateTagsInd, (state, action) => {
      state.tags.status = action.payload;
    })
    .addCase(updateBrands, (state, action) => {
      state.brands.data = action.payload;
    })
    .addCase(updateBrandsInd, (state, action) => {
      state.brands.status = action.payload;
    });
});

const market = {
  reducer: marketReducer,
  actions: {
    updateFilter,
    updateProducts,
    updateTags,
    updateTagsInd,
    updateBrands,
    updateBrandsInd,
  },
};

export default market;
