import { httpHelper } from "../utils/httpHelper";

const endpoint = {
  host: "https://market-be.herokuapp.com",
};

export const productService = {
  getBrands: () => httpHelper.get(`${endpoint.host}/brands`),
  getTags: () => httpHelper.get(`${endpoint.host}/tags`),
  getProducts: () => httpHelper.get(`${endpoint.host}/products`),
  getProductTypes: () => httpHelper.get(`${endpoint.host}/productTypes`),
};
