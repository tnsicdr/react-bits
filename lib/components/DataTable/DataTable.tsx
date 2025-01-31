type Column = {
  label?: string;
  fieldName: string;
};

type DataTableProps = {
  columns: Column[];
  data: Record<string, boolean | string | number | null | undefined>[];
  tableName: string;
};

export function DataTable({
  columns,
  data,
  tableName,
}: Readonly<DataTableProps>) {
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
        {data.map((row, idx) => {
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
