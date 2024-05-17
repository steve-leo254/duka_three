import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';

import 'datatables.net';

interface Sale {
    id: number;
    pid: number;
    quantity: number;
    created_at: string; 
    customer_id: number;
}

const sale: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);
    const tableRef = useRef<HTMLTableElement>(null);
    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get<Sale[]>('http://127.0.0.1:8000/sales');
                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);

    return (
        <div>
            <h2>Sales Table</h2>
            <table className="table table-striped table-bordered" ref={tableRef}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Created At</th>
                        <th>Customer ID</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.pid}</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.created_at}</td>
                            <td>{sale.customer_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default sale;