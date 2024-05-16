import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import React, { useState, useEffect, useRef } from 'react';

interface Product {
  id: number;
  product_name: string;
  product_quantity: number;
  product_price: number;
  image_url: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://127.0.0.1:8000/products');
        setProducts(response.data);
        $(tableRef.current!).DataTable(); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container3">
      <h2 className="mt-3">Products</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" ref={tableRef}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_quantity}</td>
                <td>$ {product.product_price}</td>
                <td>
                  <img src={product.image_url} alt={`Product ${product.id}`} style={{ width: '200px', height: '80px',objectFit:'contain' }} className="img-fluid" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;