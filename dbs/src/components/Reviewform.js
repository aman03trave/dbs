import React, { useState } from 'react';
import './Reviewform.css'; // Import the external CSS file for styling
import './Navbar.css';

const ReviewForm = () => {
  const [hygieneRating, setHygieneRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleHygieneRatingChange = (event) => {
    setHygieneRating(event.target.value);
  };

  const handleFoodRatingChange = (event) => {
    setFoodRating(event.target.value);
  };

  const handleServiceRatingChange = (event) => {
    setServiceRating(event.target.value);
  };

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
              <a href="#ReviewForm">ReviewForm</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="review-box">
        <h2>Write Your Review</h2>
        <form>
          <div className="rating-section">
            <h3>Rate on a Scale of 1-5</h3>
            <div className="rating-label">Hygiene:</div>
            <input
              type="range"
              min="1"
              max="5"
              value={hygieneRating}
              onChange={handleHygieneRatingChange}
            />
            <span className="rating-value">{hygieneRating}</span>
            <div className="rating-label">Food:</div>
            <input
              type="range"
              min="1"
              max="5"
              value={foodRating}
              onChange={handleFoodRatingChange}
            />
            <span className="rating-value">{foodRating}</span>
            <div className="rating-label">Service:</div>
            <input
              type="range"
              min="1"
              max="5"
              value={serviceRating}
              onChange={handleServiceRatingChange}
            />
            <span className="rating-value">{serviceRating}</span>
          </div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
