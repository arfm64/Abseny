import { useState, useEffect } from "react";

interface TableProps {
    row?: number;
    classConditions?: {
        accessor: string;
        value: string;
        className: string;
    }[];
    dataTable: {
        columns: {
            Header: string;
            accessor: string;
        }[];
        data: {
            [key: string]: string;
        }[];
    };
}

export default function Table({ dataTable, row = 5, classConditions }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = row;
    const [paginatedData, setPaginatedData] = useState(dataTable.data.slice(0, rowsPerPage));
    const totalPages = Math.ceil(dataTable.data.length / rowsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        setPaginatedData(dataTable.data.slice(startIndex, endIndex));
    }, [currentPage, dataTable.data, rowsPerPage]);

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        {dataTable.columns.map((column, index) => (
                            <th key={index} className="py-3 px-4 text-left">
                                {column.Header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="w-full bg-white">
                    {paginatedData.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {dataTable.columns.map((column, colIndex) => {
                                const cellValue = rowData[column.accessor];
                                let cellClass = "";
                                if (classConditions) {
                                    classConditions.forEach((condition) => {
                                        if (
                                            column.accessor === condition.accessor &&
                                            cellValue === condition.value
                                        ) {
                                            cellClass = condition.className;
                                        }
                                    });
                                }

                                return (
                                    <td key={colIndex} className={`py-3 px-4 text-left ${cellClass}`}>
                                        {colIndex === dataTable.columns.length - 1 ? (
                                            <div>
                                                <button className="bg-blue-400 hover:bg-blue-700 text-white font-normal py-2 px-5 rounded-xl me-1">
                                                    Edit
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-900 text-white font-normal py-2 px-5 rounded-xl ms-1">
                                                    Delete
                                                </button>
                                            </div>
                                        ) : (
                                            cellValue
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center my-3">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-200 px-4 py-2 mx-1 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    {currentPage} of {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="bg-gray-200 px-4 py-2 mx-1 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
