import { createReducer } from "@reduxjs/toolkit";
import {
  addCartItem,
  removeCartItem,
  updateBrands,
  updateFilter,
  updateProductsInd,
  updateProducts,
  updateProductTypes,
  updateTags,
  updateTagsInd,
  updateBrandsInd,
} from "../actions";
import { Market } from "../states/market";
import { SortDirection } from "../../types/sortDirection";
import { Status } from "../../types/status";
import { ProductType } from "../../types/productType";

const initialState: Market = {
  cart: {
    items: [],
  },
  products: [],
  productCount: 0,
  productTypes: {
    data: [],
    status: Status.Loading,
  },
  status: Status.Loading,
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
  brands: {
    data: [],
    status: Status.Loading,
  },
  tags: {
    data: [],
    status: Status.Loading,
  },
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
      state.products = action.payload;
    })
    .addCase(updateProductsInd, (state, action) => {
      state.status = action.payload;
    })
    .addCase(updateTagsInd, (state, action) => {
      state.tags.status = action.payload;
    })
    .addCase(updateBrandsInd, (state, action) => {
      state.brands.status = action.payload;
    })
    .addCase(updateTags, (state, action) => {
      state.tags.data = action.payload;
    })
    .addCase(updateBrands, (state, action) => {
      state.brands.data = action.payload;
    })
    .addCase(updateProductTypes, (state, action) => {
      state.productTypes.data = action.payload;
    })
    .addCase(addCartItem, (state, action) => {
      const addedProduct = action.payload;
      const items = [...state.cart.items];
      const item = items.find((c) => c.item.slug === addedProduct.slug);
      if (item) {
        item.count++;
      } else {
        items.push({ count: 1, item: addedProduct });
      }
      state.cart.items = items;
    })
    .addCase(removeCartItem, (state, action) => {
      const addedProduct = action.payload;
      const cartItems = [...state.cart.items];
      const item = cartItems.find((c) => c.item.slug === addedProduct.slug);
      if (item?.count === 1) {
        const excludedList = cartItems.filter(
          (i) => i.item.slug !== action.payload.slug
        );
        state.cart.items = excludedList;
        return;
      }
      if (item) {
        item.count--;
      }
    });
});

const market = {
  reducer: marketReducer,
  actions: {
    updateFilter,
    updateProducts,
    updateProductsInd,
    updateTags,
    updateTagsInd,
    updateBrands,
    updateBrandsInd,
    addCartItem,
    removeCartItem,
  },
};

export default market;
