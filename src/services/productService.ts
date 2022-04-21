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
  getBrands: () => httpHelper.get(`${API_URL}/market?list=brand`),
  getTags: () => httpHelper.get(`${API_URL}/market?list=tag`),
  getProducts: (filters: any[] = [], options: any) => {
    const queryParams = createProductFilterQuery(filters);
    return httpHelper.get(
      `${API_URL}/market?list=product&${queryParams}&`,
      options
    );
  },
  getProductTypes: () => httpHelper.get(`${API_URL}/market?list=productType`),
};
