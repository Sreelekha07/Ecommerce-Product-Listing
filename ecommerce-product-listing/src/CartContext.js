// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 } // Increment quantity
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }]; // Add new product with quantity
        });
    };

    const getTotalItemCount = () => {
        return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    };

    // Clear cart function
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, getTotalItemCount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
