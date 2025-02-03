import type { Column, SortOrder } from "./DataTable.types";
import { sortArrayByKey } from "./DataTable.utils";

type DataTableProps = {
  columns: Column[];
  data: Record<string, boolean | string | number | null | undefined>[];
  defaultSort?: SortOrder;
  tableName: string;
};

export function DataTable({
  columns,
  data,
  defaultSort,
  tableName,
}: Readonly<DataTableProps>) {
  const gridData =
    defaultSort && data.length > 1
      ? sortArrayByKey(data, defaultSort.fieldName, defaultSort.order)
      : data;

  console.debug("gridData", gridData);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => {
            return <th key={col.fieldName}>{col.label ?? col.fieldName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {gridData.map((row, idx) => {
          const key = `${tableName}-row-${idx}`;
          return (
            <tr key={key}>
              {columns.map((col) => {
                return (
                  <td key={`${key}-col-${col.fieldName}`}>
                    {row[col.fieldName]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
