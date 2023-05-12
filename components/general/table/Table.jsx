import React from "react";

const Table = ({
    size,
    headers,
    children,
    headerClass,
    footer,
}) => {
    return (
        <div className="w-full bg-white px-8">
            <div>
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            {headers.map((h, index) => (
                                <th
                                    className={`text-left ${index === 0 && "text-center"} ${headers[headers.length - 1] === "action" && `text-right`} py-3 px-2 uppercase font-semibold ${size === "sm" ? "text-md" : "text-sm"
                                        } ${headerClass}`}
                                    key={index}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-normal text-md">{children}</tbody>
                </table>

                <div className="min-w-full my-4">{footer}</div>
            </div>
        </div>
    );
};

export default Table;