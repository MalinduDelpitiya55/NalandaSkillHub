import React, { useState } from 'react';
import '../css/rating.css'; // Corrected the CSS import path

const Rating = () => {
  const [ating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    
    <div >
      <input className="rating" type="hidden" name="rating" value={rating} readOnly />
      {Array.from({ length: 5 }).map((_, idx) => (
        <i
          key={idx}
          className={`star ${idx < rating ? 'bxs-star active' : 'bx-star'}`}
          onClick={() => handleRating(idx)}
        ></i>
      ))}
    </div>
    
  );
};

export default Rating;
