import { Filter } from "./filter";
import { Product } from "./product";
import { Status } from "./status";

export interface AppState {
  data: Product[];
  status: Status;
  filters: Filter;
  productTypes: {
    data: string[];
    status: Status;
  };
  brands: {
    data: string[];
    status: Status;
  };
  tags: {
    data: string[];
    status: Status;
  };
  productCount: number;
}
