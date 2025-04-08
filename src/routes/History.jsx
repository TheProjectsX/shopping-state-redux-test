import React from "react";
import { useSelector } from "react-redux";

const History = () => {
    const historyData = useSelector((state) => state.history);

    if (historyData.length === 0) {
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                No History Found!
            </h3>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border">Action</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Date Time</th>
                    </tr>
                </thead>
                <tbody>
                    {[...historyData].reverse().map((item, idx) => (
                        <tr key={idx} className="even:bg-gray-50">
                            <td className="px-4 py-2 border">{item.action}</td>
                            <td className="px-4 py-2 border">
                                {item.product.title}
                            </td>
                            <td className="px-4 py-2 border">
                                <img
                                    src={item.product.image}
                                    alt={item.product.title}
                                    className="w-12 h-12 object-cover rounded"
                                />
                            </td>
                            <td className="px-4 py-2 border">
                                {new Date(item.time).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;
