import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";

interface Product {
  id: number;
  name: string;
  cost: number;
  price: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    price: "",
  });
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = "http://127.0.0.1:5000/products";
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get<Product[]>(apiUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (tableRef.current) {
      $(tableRef.current).DataTable();
    }
  }, [products]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const apiUrl = "http://127.0.0.1:5000/products";
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post<Product>(apiUrl, formData, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setProducts([...products, response.data]);
      setFormData({ name: "", cost: "", price: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button
            className="add-product-button"
            onClick={() => setShowModal(true)}
          >
            Add Product
          </button>
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>cost</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.cost}</td>
                    <td>{product.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal for adding products */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="cost">Cost:</label>
                <input
                  type="number"
                  id="cost"
                  name="cost"
                  value={formData.cost}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Add Product</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
