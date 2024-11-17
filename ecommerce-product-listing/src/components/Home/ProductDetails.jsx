import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import products from '../../data/Products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details-container">
      <div className="product-details-card">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
