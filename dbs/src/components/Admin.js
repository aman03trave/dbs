// External JS file for admin login functionality

// Import required modules
import React, { useState } from 'react';
import './Admin.css';

// Define functional component for admin login
const AdminLogin = () => {
  // State variables to store admin credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle admin login
  const handleAdminLogin = () => {
    // Perform admin login validation here
    // You can use AJAX or fetch to send the credentials to the server for validation
    // and handle the response accordingly

    // Example validation
    if (username === 'admin' && password === 'password') {
      // Redirect to admin dashboard or perform other actions
      console.log('Admin login successful');
    } else {
      // Display error message or perform other actions
      console.log('Invalid admin credentials');
    }
  };

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
              <a href="#Admin">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="admin-login-box">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleAdminLogin}>
        Login
      </button>
    </div>
    </section>
   
  );
};

export default AdminLogin;
