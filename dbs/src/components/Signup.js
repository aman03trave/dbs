import React from 'react';
import {Link} from "react-router-dom";
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
      <div className="signup-box">
        <h2>Sign Up for an Account</h2>
        <form>
          <h4>Name:</h4>
          <input type="text" placeholder="Name" />
          <h4>Email:</h4>
          <input type="email" placeholder="Email" />
          <h4>Password:</h4>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link className="Link" to = "/Login"><button type="submit">Sign Up</button></Link>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
