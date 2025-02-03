import { Order } from "./DataTable.types";
import { sortArrayByKey } from "./DataTable.utils";

describe("sortArrayByKey", () => {
  it("sorts in ascending order", () => {
    const input = [
      { name: "alpha", type: "car" },
      { name: "beta", type: "airplane" },
    ];

    const expected = [
      { name: "beta", type: "airplane" },
      { name: "alpha", type: "car" },
    ];
    const result = sortArrayByKey(input, "type", Order.ASC);

    expect(result).toEqual(expected);
  });

  it("sorts in descending order", () => {
    const input = [
      { name: "alpha", type: "car" },
      { name: "beta", type: "airplane" },
    ];

    const expected = [
      { name: "beta", type: "airplane" },
      { name: "alpha", type: "car" },
    ];
    const result = sortArrayByKey(input, "name", Order.DESC);

    expect(result).toEqual(expected);
  });
});
