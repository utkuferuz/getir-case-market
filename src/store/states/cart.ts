import { Product } from "../../types/product";

export interface CartItem {
  count: number;
  item: Product;
}

export interface Cart {
  items: CartItem[];
}
