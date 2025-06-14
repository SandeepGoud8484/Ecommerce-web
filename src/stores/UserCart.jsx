
import React, { useEffect } from 'react';
import { useCart } from './context/CartContext';

const UserCart = () => {
  const { cartItems } = useCart();

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Your cart is empty 🛒
        </h2>
      ) : (
        cartItems.map((item) => (
          <div className="cart-section" key={item.id}>
            <div className="cart-img">
              <img src={item.image} alt="" />
            </div>
            <div className="cart-details">
              <h3>{item.product}</h3>
              <h2>{item.price}</h2>
              <h3>{item.model}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserCart;




