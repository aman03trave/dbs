import React from 'react';
import {Link} from "react-router-dom";
import './Login.css'; // Import the external CSS file for styling
// import { Router } from 'react-router-dom';

const LoginForm = () => {
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
              <a href="#LoginForm">LoginForm</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form>
            <h4>Email</h4>
          <input type="email" placeholder="Email" />
          <h4>Password</h4>
          <input type="password" placeholder="Password" />
          <br></br>
          <Link className="Link" to = "/loginaftermath"><button type="submit">Login</button></Link>
        </form>
        <p>Don't have an account? <a href="/Signup">Sign up here</a></p>
      </div>
    </section>
  );
};

export default LoginForm;
