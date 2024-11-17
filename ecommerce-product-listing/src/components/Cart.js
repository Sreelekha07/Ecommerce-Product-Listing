// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartPage.css';

const Cart = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    // Debugging: Log cart items to check their structure
    console.log("Cart Items:", cartItems);

    // Calculate total amount and ensure price and quantity are treated as numbers
    const totalAmount = cartItems.reduce((sum, item) => {
        const itemPrice = Number(item.price);
        const itemQuantity = Number(item.quantity || 1); // Ensure quantity is a number

        // Log each item to verify correct data type conversion
        console.log("Item:", item.name, "Price:", itemPrice, "Quantity:", itemQuantity);

        return sum + (itemPrice * itemQuantity);
    }, 0);

    return (
        <div className="cart-container">
            <div className="cart-card">
                <h2 className="cart-header">Your Cart</h2>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td className="cart-item-name">{item.name}</td>
                                <td className="cart-item-quantity">{item.quantity || 1}</td> {/* Ensure quantity is displayed correctly */}
                                <td className="cart-item-price">${(item.price * (item.quantity || 1)).toFixed(2)}</td> {/* Calculate total price per item */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total-amount">
                    <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                </div>
                <button className="clear-cart-button" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default Cart;
