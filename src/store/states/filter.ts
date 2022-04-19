import { FilterItem } from "../../components/main/filter/types";
import { SortDirection } from "../../types/sortDirection";

export interface Filter {
  productType?: string;
  brands?: FilterItem[];
  tags?: FilterItem[];
  sortBy?: SortDirection;
  pagination?: {
    index?: number;
    items?: number;
  };
}
