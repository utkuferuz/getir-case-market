import { createAction } from "@reduxjs/toolkit";
import { FilterItem } from "../../components/main/filter/types";
import { FilterState } from "../states/filter";
import { Product } from "../../types/product";
import { Status } from "../../types/status";

const UPDATE_FILTER = "market/update_filter";
const UPDATE_TAGS = "market/update_tags";
const UPDATE_BRANDS = "market/update_brands";
const UPDATE_PRODUCT_TYPES = "market/update_types";
const UPDATE_PRODUCTS = "market/update_products";
const UPDATE_PRODUCTS_IND = "market/update_products_ind";
const ADD_CART_ITEM = "market/add_cart_item";
const REMOVE_CART_ITEM = "market/remove_cart_item";

export const updateFilter = createAction<FilterState>(UPDATE_FILTER);
export const updateTags = createAction<FilterItem[]>(UPDATE_TAGS);
export const updateBrands = createAction<FilterItem[]>(UPDATE_BRANDS);
export const updateProductTypes =
  createAction<FilterItem[]>(UPDATE_PRODUCT_TYPES);
export const updateProducts = createAction<Product[]>(UPDATE_PRODUCTS);
export const updateProducsInd = createAction<Status>(UPDATE_PRODUCTS_IND);
export const addCartItem = createAction<Product>(ADD_CART_ITEM);
export const removeCartItem = createAction<Product>(REMOVE_CART_ITEM);
