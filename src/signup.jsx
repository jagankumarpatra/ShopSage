import React, { useState} from 'react';
import './signup.css';
import { useNavigate } from 'react-router';
// import { auth } from './firebase';



const Signup = () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submitData = () => {
    if (name !== '' && email !== '' && password !== '') {
      const obj = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
      };

      fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert('Account created successfully! You can now proceed to login.');
          navigate('/signin');
        })
        .catch((err) => console.log(err));
    } else {
      alert('Fill in all the fields');
    }
  };
 
  return (
    
    <div className='container' >
      
      <div className='image-container'>
      <h2 id='he'>Welcome to ShopSage Store</h2>
        <img src="https://i.pinimg.com/originals/7a/2e/86/7a2e861696a29f84eb310dc5ca7e0138.png" alt="" />
      </div>
      <div className='form-container'>
      <form>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={submitData}>
            Register
          </button>
          {/* <button type="button" oncClick={log}>Login</button> */}
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Signup;
