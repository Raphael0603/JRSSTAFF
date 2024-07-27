export default function Table() {
  const rows = 10;
  const columns = 6;

  const tableRows = Array.from({ length: rows }, (_, rowIndex) => (
    <tr key={rowIndex} className="border-b">
      {Array.from({ length: columns }, (_, colIndex) => (
        <td key={colIndex} className="px-4 py-3.5 text-left text-sm">
          Content
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="m-2 p-2">
      <table className="min-w-full max-w-md divide-y divide-gray-200 shadow-lg rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {Array.from({ length: columns }, (_, colIndex) => (
              <th
                key={colIndex}
                className="px-4 py-2 text-left text-sm text-gray-500"
              >
                <b>Header</b>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{tableRows}</tbody>
      </table>
      <div className="flex items-center justify-between mt-2 text-sm">
        <div className="flex items-center space-x-2">
          <label htmlFor="rows-per-page" className="text-gray-700">
            Rows per page:
          </label>
          <select
            id="rows-per-page"
            className="border border-gray-300 rounded-md px-2 py-1 text-gray-700"
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
        </div>
        <span className="text-gray-700">1-10 out of 80</span>
      </div>
    </div>
  );
}
