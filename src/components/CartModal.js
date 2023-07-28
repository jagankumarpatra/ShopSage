import StripeCheckout from 'react-stripe-checkout';
import emailjs from '@emailjs/browser';
import './CartModal.css';
import React, { useState, useEffect } from 'react';
const CartModal = ({ cartItems, onClose,onPaymentDone }) => {
   
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  // const [cartItems, setCartItems] = useState([])
  const [totalBill, setTotalBill] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const[email,setEmail]=useState('');
  const applyCoupon = () => {
    if (couponCode === 'ShopSage10') {
      const discount = totalBill * 0.1; // 10% discount
      setDiscountedTotal(totalBill - discount);
    }
    else if(couponCode!='ShopSage10') {
      setDiscountedTotal('coupon not exists');
    }
    else {
      
      setDiscountedTotal(totalBill);
    }
  };

  useEffect(() => {
    // Function to calculate the total bill whenever cartItems change
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalBill(total);
    setDiscountedTotal(total); // Initially, discountedTotal is the same as total
  }, [cartItems]);

  const handleOrderClick = () => {
    alert('Order booked!');
  };
  useEffect(() => {
    // Check if the cart items are present in localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    
  }, []);
 
  
  
  const onToken=async (token)=>{
    alert('Payment done! Order booked!');
      console.log(token);
      onClose();
      onPaymentDone();
      setIsPaymentDone(true);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      
      // Send order details via email.js
      const serviceID = 'service_3pnri38';
      const templateID = 'template_zd7t7at';
      const userID= 'l3c4kCgkkLcKYppym';
  
      const templateParams = {
        to_name: 'email', // Replace with the recipient's name
        from_name: 'ShopSage Store', // Replace with your store name
        order_details: JSON.stringify(cartItems),
        total_bill: discountedTotal,
        // Add any other relevant order information here
      };
      try {
        await emailjs.send(serviceID, templateID, templateParams, userID);
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
      }
  }

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h3>Cart Items</h3>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.description} />
            </div>

            <div className="item-details">
              <div>{item.description}</div>
              <div>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      {/* otp verification */}
      
      {/* otp verification end */}
      <div className="coupon">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter Coupon Code"
        />
        <button onClick={applyCoupon}>Apply Coupon</button>
      </div>

      <div className="payment">
        <div className="payment-title">TOTAL BILL: {totalBill}</div>
        {discountedTotal !== totalBill && (
          <div className="payment-title">DISCOUNTED TOTAL: {discountedTotal}</div>
        )}
       
        {/* <button className="order-button" onClick={handleOrderClick}>
          Book Order
        </button> */}
        <StripeCheckout
        token={onToken}
        name='ShopSage Store Payemnt Form'
        amount={ discountedTotal*100}
        currency='INR'
        stripeKey="pk_test_51NYLTJSIe6QzLz3FxqvC3Op8Gbd5hahNBqCXEGpArvyVkGUmcNp3R0C1JyvrVtID1z9g0E0oDWLyitHxAVuCsx6200v1M64kml"
      />
        
      </div>
    </div>
  );
};

export default CartModal;
