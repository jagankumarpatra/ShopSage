import React from 'react';

const PriceBox = ({ totalPrice }) => {
  return (
    <div className="price-box">
      <div className="price-box-title">TOTAL BILL:</div>
      <div>{totalPrice} USD</div>
    </div>
  );
};

export default PriceBox;
