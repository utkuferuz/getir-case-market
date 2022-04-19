import { createAction } from "@reduxjs/toolkit";
import { FilterItem } from "../../components/main/filter/types";
import { Filter } from "../states/filter";

import { Product } from "../../types/product";
import { Status } from "../../types/status";

const UPDATE_FILTER = "product/update_filter";
const ON_PRODUCT_LIST_LOADED = "product/on_product_list_loaded";

const UPDATE_TAGS = "product/update_tags";
const UPDATE_TAGS_IND = "product/update_tags_ind";

const UPDATE_BRANDS = "product/update_brands";
const UPDATE_BRANDS_IND = "product/update_brands_ind";

const UPDATE_PRODUCT_TYPES = "product/update_types";
const UPDATE_PRODUCT_TYPES_IND = "product/update_types_ind";

const UPDATE_PRODUCTS = "product/update_products";
const UPDATE_PRODUCTS_IND = "product/update_products_ind";

const UPDATE_CART_ITEMS = "product/update_cart_items";

export const updateFilter = createAction<Filter>(UPDATE_FILTER);
export const onProductListLoaded = createAction<Filter>(ON_PRODUCT_LIST_LOADED);

/* Tags */
export const updateTags = createAction<FilterItem[]>(UPDATE_TAGS);
export const updateTagsInd = createAction<Status>(UPDATE_TAGS_IND);

/* Brands */
export const updateBrands = createAction<FilterItem[]>(UPDATE_BRANDS);
export const updateBrandsInd = createAction<Status>(UPDATE_BRANDS_IND);

/* Product Types */
export const updateProductTypes = createAction<string[]>(UPDATE_PRODUCT_TYPES);
export const updateProductTypesInd = createAction<Status>(
  UPDATE_PRODUCT_TYPES_IND
);

/* Products */
export const updateProducts = createAction<Product[]>(UPDATE_PRODUCTS);
export const updateProducsInd = createAction<Status>(UPDATE_PRODUCTS_IND);

/* Cart */
export const updateCartItems = createAction<number>(UPDATE_CART_ITEMS);
