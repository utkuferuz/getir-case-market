import { httpHelper } from "../utils/httpHelper";

export const API_URL = process.env.REACT_APP_API_URL;

const createProductFilterQuery = (selectedFilters: any[]): string => {
  let params = "";
  selectedFilters.forEach((item) => {
    if (item.value) {
      let currentParam = "";
      currentParam = `${item.key}=${item.value}`;
      params = params ? `${params}&${currentParam}` : currentParam;
    }
  });
  return params;
};

export const productService = {
  getBrands: () => httpHelper.get(`${API_URL}/market?list=brands`),
  getTags: () => httpHelper.get(`${API_URL}/market?list=tags`),
  getProducts: (filters: any = [], options = null) => {
    const queryParams = createProductFilterQuery(filters);
    return httpHelper.get(`${API_URL}/market?list=products&${queryParams}`);
    // return httpHelper.put(`${API_URL}/market?list=product`, payload);
  },
  getProductTypes: () => httpHelper.get(`${API_URL}/market?list=productTypes`),
};
