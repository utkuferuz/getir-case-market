import { httpHelper } from "../utils/httpHelper";

export const API_URL = process.env.REACT_APP_API_URL;

const createProductFilterQuery = (selectedFilters: any[]): string => {
  let params = "";
  selectedFilters.forEach((item) => {
    if (item.value) {
      console.log(item.value);
      let currentParam = "";
      currentParam = `${item.key}=${item.value}`;
      params = params ? `${params}&${currentParam}` : currentParam;
    }
  });
  return params;
};

export const productService = {
  getBrands: () => httpHelper.get(`${API_URL}/brands`),
  getTags: () => httpHelper.get(`${API_URL}/tags`),
  getProducts: (filters: any[] = []) => {
    const queryParams = createProductFilterQuery(filters);
    return httpHelper.get(`${API_URL}/products?${queryParams}&`);
  },
  getProductTypes: () => httpHelper.get(`${API_URL}/productTypes`),
};
