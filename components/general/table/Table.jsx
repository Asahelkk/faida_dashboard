import React from "react";

const Table = ({
    headers,
    children,
    transformation,
    footer,
    headerColor,
    paddingX
}) => {
    return (
        <div className={`w-full bg-white ${paddingX}`}>
            <div>
                <table className="min-w-full">
                    <thead className={headerColor ? headerColor : `border-b`}>
                        <tr>
                            {headers.map((h, index) => (
                                <th
                                    className={`py-4 px-2 ${transformation ? transformation : `uppercase`} text-center font-semibold text-sm`}
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