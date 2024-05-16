import React, { useState } from 'react';

const App = () => {
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState('');

  const handleStarClick = (index) => {
    let click = 0;
    setRating(index + 1);
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');

    allStar.forEach((item, idx) => {
      item.classList.replace('bxs-star', 'bx-star');
      item.classList.remove('active');
    });
    
    for (let i = 0; i < allStar.length; i++) {
      if (i <= index) {
        allStar[i].classList.replace('bx-star', 'bxs-star');
        allStar[i].classList.add('active');
      } else {
        allStar[i].style.setProperty('--i', click);
        click++;
      }
    }

    ratingValue.value = index + 1;
  };

  return (
    <div
      style={{
        background: '#F5F5F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      <div
        style={{
          background: '#FFF',
          padding: '2rem',
          maxWidth: '576px',
          width: '100%',
          borderRadius: '0.75rem',
          boxShadow: '8px 8px 30px rgba(0, 0, 0, .05)',
          textAlign: 'center',
        }}
      >
        <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          How was your Experience ?
        </h4>
        <form action="#">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gridGap: '0.5rem',
              fontSize: '1.5rem',
              color: '#FFBD13',
              marginBottom: '2rem',
            }}
            className="rating"
          >
            <input type="number" name="rating" hidden />
            {[...Array(5)].map((_, idx) => (
              <i
                key={idx}
                className={`bx ${rating > idx ? 'bxs-star active' : 'bx-star'}`}
                style={{ '--i': idx, cursor: 'pointer' }}
                onClick={() => handleStarClick(idx)}
                className="star"
              ></i>
            ))}
          </div>
          <textarea
            name="opinion"
            cols="30"
            rows="5"
            placeholder="Your opinion..."
            style={{
              width: '100%',
              background: '#F5F5F5',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: 'none',
              outline: 'none',
              resize: 'none',
              marginBottom: '0.5rem',
            }}
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
          ></textarea>
          <div
            style={{
              display: 'flex',
              gridGap: '0.5rem',
              alignItems: 'center',
            }}
            className="btn-group"
          >
            <button
              type="submit"
              className="btn submit"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                background: '#4383FF',
                color: '#FFF',
              }}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn cancel"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                background: '#FFF',
                color: '#4383FF',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
