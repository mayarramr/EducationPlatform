import React from 'react';

const Status = ["Completed", "On Going", "Completed", "Delayed", "Completed"];
const Qty = ["1", "2", "1", "3", "2"];
const Total = ["$ 78.88$", "$ 158.49", "$ 58.78", "$ 347.89", "$ 243.99"];
const Fees = ["$ 9.99", "$ 30.00", "$ 9.99", "$ 580.00", "$ 110.00"];

export default function CoursesbyStatus() {
    return (
        <div className="bg-white rounded-4 blue-border p-3">
            <h5>Courses by status</h5>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th className="text-color">Status</th>
                        <th className="text-color">Qty</th>
                        <th className="text-color">Total</th>
                        <th className="text-color">Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping over the arrays to generate table rows */}
                    {Status.map((status, index) => (
                        <tr key={index} className="text-center">
                            <td><p className="border rounded-2 text-color">{status}</p></td>
                            <td>{Qty[index]}</td>
                            <td>{Total[index]}</td>
                            <td>{Fees[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
