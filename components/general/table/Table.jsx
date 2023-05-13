import React from "react";

const Table = ({
    size,
    headers,
    children,
    headerClass,
    footer,
}) => {
    return (
        <div className="w-full bg-white px-8 ">
            <div>
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            {headers.map((h, index) => (
                                <th
                                    className={`py-6 px-2 uppercase text-center font-semibold text-sm ${headerClass}`}
                                    key={index}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-normal text-md">{children}</tbody>
                </table>

                <div className="min-w-full pt-4 pb-8">{footer}</div>
            </div>
        </div>
    );
};

export default Table;