import React from 'react';
import { Link } from 'react-router-dom';
import './sign.css'; // Import the external CSS file for styling

const SignupForm = () => {
  

  return (
    <section>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <a className="a" href="/">
              <span>C</span>hew
              <span>&</span>
              <span>R</span>eview
            </a>
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#SignUpForm">SignUpForm</a>
            </li>
          </ul>
        </div>
      </nav>
      <div >
      <h2>Customer</h2>
      <br></br>
        
        <Link className="Link" to="/Signupaftermath">
          <button type="button" onClick={SignupForm}>
            Customer
          </button></Link>
          <h2>Restaurant Owner</h2>
          <Link className="Link" to="/Owner">
         
          <button type="button" onClick={SignupForm}>
            Owner
          </button></Link>
      </div>
    </section>
  );
};

export default SignupForm;
