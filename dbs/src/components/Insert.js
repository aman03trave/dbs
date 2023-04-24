import React, {useState} from 'react'
//import {Link} from 'react-router-dom';
import './Insert.css';
import './Login.css';

const Insert = () => {
    const [reviewText, setReviewText] = useState('');

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
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
            <a href="#SignUpForm">Insert</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="signup-box">
    <h2>Add Item into Menu</h2>
      <form>
        <h4>Restaurant Id:</h4>
        <input type="text" placeholder="Name" />
        <h4>Item Id:</h4>
        <input type="text" placeholder="Item Id" />
    
        <h4>Item Name:</h4>
        <input type="text" placeholder="Item Name" />

        <h4>Veg/Non-Veg:</h4>
        <input type="text" placeholder="Preference" />
        
        <h4>Description:</h4>
        <div className="review-section">
            <h3>Add Your Review</h3>
            <textarea
              rows="5"
              cols="30"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={handleReviewTextChange}
            ></textarea>
          </div>
       

       
        {/* <p>Sign Up count: {count}</p> Display count */}
        
        <button type="button" onClick={Insert}>
          Enter
        </button>
        
      </form>
    </div>
  </section>
  )
}

export default Insert
