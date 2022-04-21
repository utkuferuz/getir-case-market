import { createReducer } from "@reduxjs/toolkit";
import {
  addCartItem,
  removeCartItem,
  updateBrands,
  updateFilter,
  updateProducsInd,
  updateProducts,
  updateProductTypes,
  updateTags,
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
    status: Status.Pending,
  },
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
  brands: {
    data: [],
    status: Status.Pending,
  },
  tags: {
    data: [],
    status: Status.Pending,
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
    .addCase(updateProducsInd, (state, action) => {
      state.status = action.payload;
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
    updateTags,
    updateBrands,
    addCartItem,
    removeCartItem,
  },
};

export default market;
