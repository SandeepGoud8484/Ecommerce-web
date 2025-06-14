
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';
import { useCart } from '../stores/context/CartContext';
import { speakerData } from '../stores/data/speaker';

const SpeakerSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = speakerData.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Product not found
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="ind-page">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details">
          <h2>{product.company}</h2>
          <h3>{product.model}</h3>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default SpeakerSingle;
