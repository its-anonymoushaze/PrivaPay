import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

interface TableProps<TData> {
  data: TData[];
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
  currentPage?: number;
  totalPages?: number;
  hidePagination?: boolean;
  columns: ColumnDef<TData>[];
}

export function Table<TData>({
  data,
  columns,
  hidePagination,
  isLoading,
  currentPage,
  totalPages,
  error,
}: TableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-[80vw] h-[70vh]">
      {/* Table */}
      <table className="min-w-full divide-y divide-gray-700 border border-gray-800  p-6 rounded-2xl shadow-simple text-white">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-6 text-left text-xs font-medium text-[#7f8286] uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=" divide-y divide-gray-800 max-h-[64px]">
          {isLoading && (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-600"
              >
                {error}
              </td>
            </tr>
          )}
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} style={{ height: "32px" }}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-md  h-fit"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {!hidePagination && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button
              className="px-4 py-2 text-sm font-medium border-gray-800 text-white rounded-md border disabled:cursor-not-allowed "
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 text-sm font-medium border-gray-800 text-white rounded-md border disabled:cursor-not-allowed"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
          <span className="text-sm text-white">
            Page{" "}
            <strong>
              {currentPage} of {totalPages}
            </strong>
          </span>
        </div>
      )}
    </div>
  );
}
