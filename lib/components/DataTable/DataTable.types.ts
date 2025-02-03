export const Order = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
export type Order = keyof typeof Order;

export type SortOrder = {
  fieldName: string;
  order: Order;
};

export type Column = {
  label?: string;
  fieldName: string;
};
