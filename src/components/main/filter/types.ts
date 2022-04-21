export type FilterItem = {
  id: string;
  name: string;
  productCount?: number;
};

export const filterTypes = [
  { type: "brands", title: "Brands", placeholder: "Search brand" },
  { type: "tags", title: "Tags", placeholder: "Search tag" },
];
