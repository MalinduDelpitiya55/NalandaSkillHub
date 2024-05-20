import React, { useState } from 'react';
import { Rating } from '@mui/material';


const rating= () => {
  const [value, setValue] = useState(2); // Initial value

  return (
    <>
    
    <div
    style={{
      background: '#E5F3FD',
      padding: '2rem',
      maxWidth: '500px',
      width: '90%',
      borderRadius: '0.75rem',
      boxShadow: '8px 8px 30px rgba(0, 0, 0, .05)',
      textAlign: 'center',
      marginLeft:'400px',
      marginTop:'100px',
      marginBottom:'50px'
    }}
  >
    <h5 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
      How was your Experience ?
    </h5>
    <form action="#">
      
    <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
      <div
        className="rating"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gridGap: '0.5rem',
          fontSize: '1.5rem',
          color: '#FFBD13',
          marginBottom: '2rem',
        }}
        
      >
      
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

</>
  );
};

export default rating;
