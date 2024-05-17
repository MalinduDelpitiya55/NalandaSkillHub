import React, { useState } from 'react';
import 'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css';
import './css/rating.css';
// import './js/rating.js';

const FormReviews = () => {
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState('');

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Rating: ${rating}, Opinion: ${opinion}`);
  };

  return (
    <div className="wrapper">
      <h4>How was your Experience?</h4>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <input type="number" name="rating" hidden value={rating} readOnly />
          {Array(5).fill(0).map((_, idx) => (
            <i
              key={idx}
              className={`bx star ${idx < rating ? 'bxs-star active' : 'bx-star'}`}
              style={{ '--i': idx }}
              onClick={() => handleRating(idx)}
            ></i>
          ))}
        </div>
        <textarea
          name="opinion"
          cols="30"
          rows="5"
          placeholder="Your opinion..."
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        ></textarea>
        <div className="btn-group">
          <button type="submit" className="btn submit">Submit</button>
          <button type="button" className="btn cancel" onClick={() => setOpinion('')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FormReviews;
