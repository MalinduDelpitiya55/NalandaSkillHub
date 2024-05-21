import React, { useState, useEffect } from 'react';

const ReviewPage = () => {
  const [reviews, setReviews] = useState({
    5: 835,
    4: 504,
    3: 208,
    2: 200,
    1: 101,
  });

  const [globalValue, setGlobalValue] = useState(0.0);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    updateValues();
  }, []);

  const updateValues = () => {
    const total = getTotal(reviews);
    setTotalReviews(total);

    const finalRating = Object.entries(reviews)
      .map(([key, value]) => key * value)
      .reduce((a, b) => a + b) / total;
    
    setGlobalValue(parseFloat(finalRating.toFixed(1)));
  };

  const getTotal = (reviews) => {
    return Object.values(reviews).reduce((a, b) => a + b);
  };

  const handleValueClick = (value) => {
    setReviews((prevReviews) => {
      const newReviews = { ...prevReviews };
      newReviews[value] += 1;
      updateValues();
      return newReviews;
    });
  };

  const nFormat = (number) => {
    if (number >= 1000 && number < 1000000) {
      return `${(number / 1000).toFixed(1)}k`;
    } else if (number >= 1000000 && number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}m`;
    } else if (number >= 1000000000) {
      return `${(number / 1000000000).toFixed(1)}b`;
    } else if (number === "NaN") {
      return `0.0`;
    } else {
      return number;
    }
  };

  const styles = {
    container: {
      display: 'flex',
      borderRadius: '15px',
      gap: '5px',
      height: '200px',
    },
    chart: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '100%',
    },
    rateBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      height: '30px',
      padding: '20px 0',
    },
    rateBoxChild: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      color: '#444',
      marginTop: '200px',
    },
    value: {
      fontSize: '25px',
      cursor: 'pointer',
    },
    progressBar: {
      position: 'relative',
      backgroundColor: '#cfd8dc91',
      height: '10px',
      borderRadius: '100px',
      width: '350px',
    },
    progress: {
      backgroundColor: '#5161f0',
      height: '100%',
      borderRadius: '100px',
      transition: '300ms ease-in-out',
    },
    global: {
      height: '350px',
      width: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2px',
    },
    globalValue: {
      fontSize: '40px',
      fontWeight: '500',
    },
    totalReviews: {
      fontSize: '25px',
    },
    button: {
      lineHeight: '30px',
      width: '150px',
      fontSize: '12pt',
      fontFamily: 'Tahoma',
      marginTop: '330px',
      marginRight: '50px',
      position: 'absolute',
      top: '0',
      right: '0',
      borderRadius: '5px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    sprHeaderTitle: {
      marginTop: '130px',
    },
    review: {
      borderBottom: '1px solid grey',
      padding: '10px',
    },
    stars: {
      color: 'orange',
    },
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', marginLeft: '40px', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#FFFFFF' }}>
      <div style={styles.container}>
        <div style={styles.chart}>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} style={styles.rateBox}>
              <span style={{ ...styles.rateBoxChild, ...styles.value }} onClick={() => handleValueClick(rating)}>{rating}</span>
              <div style={{ ...styles.rateBoxChild, ...styles.progressBar }}>
                <span style={{ ...styles.progress, width: `${Math.round((reviews[rating] / totalReviews) * 100)}%` }}></span>
              </div>
              <span style={styles.rateBoxChild}>{nFormat(reviews[rating])}</span>
            </div>
          ))}
        </div>
        <div style={styles.global}>
          <span style={styles.globalValue}>{globalValue}</span>
          <span style={styles.totalReviews}>{nFormat(totalReviews)}</span>
        </div>
      </div>
      <h4 style={styles.sprHeaderTitle}>Customer Reviews</h4>
      <div id="wrapper">
        <div id="container">
          <input style={styles.button} type="button" value="Write Review" />
        </div>
      </div>
      <div style={styles.review}>
        <p><strong>Neha De Silva</strong></p>
        <p><span style={styles.stars}>★★☆☆☆</span> - 10 months ago</p>
        <p>They delivered an exceptional website redesign, exceeding expectations with their professionalism and creativity.</p>
      </div>
      <div style={styles.review}>
        <p><strong>Shashi Fonseka</strong></p>
        <p><span style={styles.stars}>★★★★★</span> - A year ago</p>
        <p>DesignX did an amazing job redesigning my website. They were professional, understood my vision, and delivered a beautiful, user-friendly site on time and within budget. Highly recommended!</p>
      </div>
    </div>
  );
};

export default ReviewPage;
