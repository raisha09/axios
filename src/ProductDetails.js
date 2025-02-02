


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading product details...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <Link to="/">
        <button style={{ padding: "5px 10px", cursor: "pointer" }}>
          Back to Products
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
