import { SortDirection } from "./sortDirection";

export interface Filter {
  productType?: string;
  brands?: string[];
  tags?: string[];
  sortBy?: SortDirection;
  pagination?: {
    index?: number;
    items?: number;
  };
}
