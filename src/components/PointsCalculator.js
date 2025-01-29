import React, { useEffect, useState } from "react";
import { fetchTransactionData } from "../services/api";
import { calculatePoints } from "../utils/pointsCalculator";

const pointsCalculator = () => {
    const [transactions, setTransactions] = useState([]);
    const [points, setPoints] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await fetchTransactionData();
            setTransactions(data);
        };

        getData();
    }, []);

    useEffect(() => {
        const tempPoints = {};
        transactions.forEach(transaction => {
            const { customerId, amount } = transaction;
            if (!tempPoints[customerId]) {
                tempPoints[customerId] = 0;
            }
            tempPoints[customerId] += calculatePoints(amount);
        });
        setPoints(tempPoints);
    }, [transactions]);

    return (
        <div>
            <h1>Points Calculator</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Transaction Amount</th>
                        <th>Points Earned</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.customerId}</td>
                            <td>{transaction.amount}</td>
                            <td>{points[transaction.customerId] || 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default pointsCalculator;
