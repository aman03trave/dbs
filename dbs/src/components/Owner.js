import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign.css'; // Import the external CSS file for styling


const Owner = () => {
    const [count, setCount] = useState(0); // Local state for count
  const [formData, setFormData] = useState({
    rest_id: '',
    user_name: '',
    rest_name: '',
    address_street: '',
    address_city: '',
    address_state: '',
    opening_time: '',
    closing_time: ''
  }); // Local state for form data

  const handleSignUp = () => {
    // Function to handle sign up button click
    setCount(count + 1); // Increment count by 1
  };

  const handleChange = (e) => {
    // Function to handle input field changes
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <a href="#SignUpForm">Owner</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="signup-box">
      <h2>Sign Up for an Account</h2>
      <form>
        <h4>Restaurant ID:</h4>
        <input
          type="text"
          name="rest_id"
          placeholder="Restaurant ID"
          value={formData.rest_id}
          onChange={handleChange}
        />
        <h4>User Name:</h4>
        <input
          type="text"
          name="user_name"
          placeholder="User Name"
          value={formData.user_name}
          onChange={handleChange}
        />

        <h4>Restaurant Name:</h4>
        <input
          type="text"
          name="rest_name"
          placeholder="Restaurant Name"
          value={formData.rest_name}
          onChange={handleChange}
        />
        <h4>Address:</h4>
          <input
            type="text"
            name="address_street"
            placeholder="Street"
            value={formData.address_street}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address_city"
            placeholder="City"
            value={formData.address_city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address_state"
            placeholder="State"
            value={formData.address_state}
            onChange={handleChange}
          />
          <h4>Opening Time:</h4>
          <input
            type="text"
            name="opening_time"
            placeholder="Opening Time"
            value={formData.opening_time}
            onChange={handleChange}
          />
          <h4>Closing Time:</h4>
          <input
            type="text"
            name="closing_time"
            placeholder="Closing Time"
            value={formData.closing_time}
            onChange={handleChange}
          />

        <p>Sign Up count: {count}</p> {/* Display count */}
        <Link className="Link" to="/Admin"><button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        </Link>
      </form>
    </div>
  </section>
);
};


export default Owner
