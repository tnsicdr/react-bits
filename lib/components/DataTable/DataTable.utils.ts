import { Order } from "./DataTable.types";

export function sortArrayByKey<T>(
  array: T[],
  sortProp: keyof T,
  order?: Order
) {
  return array.sort((a, b) => {
    if (order === Order.DESC) {
      if (a[sortProp] > b[sortProp]) return -1;
      if (a[sortProp] < b[sortProp]) return 1;
    } else {
      if (a[sortProp] < b[sortProp]) return -1;
      if (a[sortProp] > b[sortProp]) return 1;
    }
    return 0;
  });
}
