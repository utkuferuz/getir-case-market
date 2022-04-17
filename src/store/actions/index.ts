import { createAction } from "@reduxjs/toolkit";
import { Filter } from "../states/filter";

import { Product } from "../states/product";
import { Status } from "../states/status";

const ON_FILTER_CHANGED = "product/on_filter_changed";
const ON_PRODUCT_LIST_LOADED = "product/on_product_list_loaded";
const UPDATE_PRODUCTS = "product/update_products";
const UPDATE_PRODUCTS_IND = "product/update_products_ind";

const LOAD_BRANDS = "product/load_brands";
const UPDATE_BRANDS = "product/update_brands";
const UPDATE_BRANDS_IND = "product/update_brands_ind";

const LOAD_PRODUCT_TYPES = "product/load_types";
const UPDATE_PRODUCT_TYPES = "product/update_types";
const UPDATE_PRODUCT_TYPES_IND = "product/update_types_ind";

const LOAD_TAGS = "product/load_tags";
const UPDATE_TAGS = "product/update_tags";
const UPDATE_TAGS_IND = "product/update_tags_ind";

const UPDATE_CART_ITEMS = "product/update_cart_items";

export const onFilterChanged = createAction<Filter>(ON_FILTER_CHANGED);
export const onProductListLoaded = createAction<Filter>(ON_PRODUCT_LIST_LOADED);

/* Products */
export const updateProducts = createAction<Product[]>(UPDATE_PRODUCTS);
export const updateProducsInd = createAction<Status>(UPDATE_PRODUCTS_IND);

/* Brands */
export const loadBrandList = createAction(LOAD_BRANDS);
export const updateBrands = createAction<string[]>(UPDATE_BRANDS);
export const updateBrandsInd = createAction<Status>(UPDATE_BRANDS_IND);

/* Product Types */
export const loadProductTypes = createAction(LOAD_PRODUCT_TYPES);
export const updateProductTypes = createAction<string[]>(UPDATE_PRODUCT_TYPES);
export const updateProductTypesInd = createAction<Status>(
  UPDATE_PRODUCT_TYPES_IND
);

/* Tags */
export const loadTags = createAction(LOAD_TAGS);
export const updateTags = createAction<string[]>(UPDATE_TAGS);
export const updateTagsInd = createAction<Status>(UPDATE_TAGS_IND);

export const updateCartItems = createAction<number>(UPDATE_CART_ITEMS);
