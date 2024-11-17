import React from 'react';
import CategoryList from '../components/Home/CategoryList';
import ProductList from '../components/Home/ProductList';
import './home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our Ecommerce Platform</h1>
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default Home;
