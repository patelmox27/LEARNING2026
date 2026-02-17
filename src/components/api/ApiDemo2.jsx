import { useState } from "react"
import React from 'react'
import axios from "axios"

export const ApiDemo2 = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      console.log(response.data);

      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>PRODUCT TABLE</h1>

      <button onClick={getProducts}>Load Products</button>

      {products.length > 0 && (<table className="table table-dark"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  )
}
