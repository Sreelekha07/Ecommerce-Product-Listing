import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/Products";
import "./ProductList.css";
import { CartContext } from "../../CartContext";

const ProductListing = () => {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  const [priceRange, setPriceRange] = useState([0, 1000]);

  if (!category) {
    return (
      <h2 className="list-title">Please select a category to view products.</h2>
    );
  }

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    setPriceRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "min") newRange[0] = Number(value);
      else newRange[1] = Number(value);
      return newRange;
    });
  };

  const filteredByPrice = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="product-container">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <div>
        <h2 className="filter-title">Filter by Price</h2>
        <label>
          Min:
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className="product-list">
        {filteredByPrice.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </Link>
            <div className="cart-button">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
