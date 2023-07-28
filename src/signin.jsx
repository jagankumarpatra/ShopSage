import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from 'react-router';
const Signin = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    navigate('/home');
  };
  const reg = () =>{
    navigate('/');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);
        if (user) {
          // Save the token to local storage
          localStorage.setItem('token', JSON.stringify(user.id));
          alert('You are logged in!');
          navigate('/home');
          // navigate('/loader');
        } else {
          alert('Invalid credentials! ');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
      });
  };
 
  return (
    
    <section className="signin-section">
    
      <div className="signin-container">
      
        <form onSubmit={handleSubmit} className="signin-form">
          <p className="lead fw-normal mb-0 signin-heading">Sign In</p>
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter a valid email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <p className="small fw-bold mt-2 pt-1 mb-0">
           Don't have an account? <button onClick={reg}>Register</button>
          </p>


          <div>
            <button type="submit" className="btn btn-primary btn-lg signin-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signin;


