import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import 'datatables.net';
import url from '../config';

interface Sale {
    id: number;
    pid: number;
    quantity: number;
    created_at: string;
    customer_id: number;
}

const Sale: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);
    const [open, setOpen] = useState(false);
    const [newSale, setNewSale] = useState<Omit<Sale, 'id' | 'created_at'>>({
        pid: 0,
        quantity: 0,
        customer_id: 0,
    });

    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get<Sale[]>('http://64.225.71.67:8000/sales');
                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales:', error);
            }
        };

        fetchSales();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSale({ ...newSale, [e.target.name]: e.target.value });
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/sale`, newSale);
            setSales([...sales, response.data]);
            handleClose();
        } catch (error) {
            console.error('Error adding sale:', error);
        }
    };

    return (
        <div>
            <h2>Sales Table</h2>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add Sale
            </Button>
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

            <Modal open={open} onClose={handleClose}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Add Sale
                    </Typography>
                    <TextField
                        label="Product ID"
                        name="pid"
                        value={newSale.pid}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                        required
                    />
                    <TextField
                        label="Quantity"
                        name="quantity"
                        value={newSale.quantity}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                        required
                    />
                    <TextField
                        label="Customer ID"
                        name="customer_id"
                        value={newSale.customer_id}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        type="number"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Sale;
