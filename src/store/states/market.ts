import { FilterItem } from "../../components/main/filter/types";
import { FilterState } from "./filter";
import { Product } from "../../types/product";
import { Status } from "../../types/status";
import { Cart } from "./cart";

export interface Market {
  cart: Cart;
  products: Product[];
  productCount: number;
  productTypes: {
    data: FilterItem[];
    status: Status;
  };
  brands: {
    data: FilterItem[];
    status: Status;
  };
  tags: {
    data: FilterItem[];
    status: Status;
  };
  status: Status;
  filter: FilterState;
}
