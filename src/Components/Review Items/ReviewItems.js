import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Review Items/ReviewItems.css'

const ReviewItems = ({ product,handleRemoveProduct }) => {
  const {id, name, img, price, shipping, quantity } = product;
  return (
    <div className='review-items'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-items-details-container">
        <div className="review-items-details">
          <p>{name}</p>
          <p><small>Price: ${price}</small></p>
          <p><small>Shipping: ${shipping}</small></p>
          <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="review-items-delete">
          <button onClick={() => handleRemoveProduct(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} ></FontAwesomeIcon>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ReviewItems;