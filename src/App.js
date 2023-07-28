import React, { useState } from 'react';
import './App.css';

import AllRoutes from './AllRouter';
import Signup from './signup';
import Signin from './signin';

import CartModal from './components/CartModal';
import HomePage from './components/HomePage';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  // const [captchaVisible, setCaptchaVisible] = useState(true);
  // const [number, setNumber] = useState('');

  // const handleClick = () => {
  //   if (!number) {
  //     alert('Please enter a valid phone number');
  //     return;
  //   }
  //   let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //   let formattedNumber = `+${number}`; // Format the number with a "+" sign
  //   firebase.auth()
  //     .signInWithPhoneNumber(formattedNumber, recaptcha)
  //     .then((e) => {
  //       let code = prompt('Enter the otp');
  //       if (code == null) {
  //         return;
  //       }
  //       e.confirm(code)
  //         .then((result) => {
  //           console.log("correct");
  //           // Hide the captcha button after successful verification
  //           alert('Thanks OTP verified! Now you can fill in the details.');
  //           setCaptchaVisible(false);
  //         })
  //         .catch(() => {
  //           console.log("error");
  //         });
  //     });
  // };

  return (
    <div className="App">
      <AllRoutes/>
      {/* Add your other components or JSX here */}
    </div>
  );
}

export default App;
