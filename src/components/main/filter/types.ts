export type FilterItem = {
  id: string;
  name: string;
};

export const filterTypes = [
  { type: "brands", title: "Brands", placeholder: "Search brand" },
  { type: "tags", title: "Tags", placeholder: "Search tag" },
];
