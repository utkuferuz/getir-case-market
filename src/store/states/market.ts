import { FilterItem } from "../../components/main/filter/types";
import { FilterState } from "./filter";
import { Product } from "../../types/product";
import { Status } from "../../types/status";

export interface Market {
  data: Product[];
  status: Status;
  filter: FilterState;
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
  productCount: number;
}
