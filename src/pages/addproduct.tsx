import { useState } from "react";
import axios from "axios";

interface Product {
  name: string;
  stock_quantity: number;
  price: number;
  cost: number;
  image_url?: string;
}

export default function AddProduct() {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    stock_quantity: 0,
    cost: 0,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: value,
    }));
  };

  const handleCreateProduct = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("stock_quantity", product.stock_quantity.toString());
    formData.append("cost", product.cost.toString());
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created successfully:", response.data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form onSubmit={handleCreateProduct}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock_quantity" className="form-label">
          Stock quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="stock_quantity"
          value={product.stock_quantity}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cost" className="form-label">
          Cost
        </label>
        <input
          type="number"
          className="form-control"
          id="cost"
          value={product.cost}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Select Image
        </label>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Create Product
      </button>
    </form>
  );
}
