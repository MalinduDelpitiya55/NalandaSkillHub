//import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, promo, price, delivery, features, buttonLabel }) => {
    return (
        <div style={styles.card}>
            <div style={styles.cardHeader}>
                <h2>{title}</h2>
            </div>
            <div style={styles.cardContent}>
                <h3 style={styles.promo}>{promo}</h3>
                <p style={styles.price}>{`$ ${price}`}</p>
                <p style={styles.delivery}>
                    <FontAwesomeIcon icon={faClock} /> {delivery}
                </p>
                <ul style={styles.list}>
                    {features.map((feature, index) => (
                        <li key={index} style={styles.listItem}>{feature}</li>
                    ))}
                </ul>
                <button style={styles.button} type="submit">{buttonLabel}</button>
            </div>
        </div>
    );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  delivery: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
const App = () => {
  const cardData = [
    {
      title: 'Basic',
      promo: 'BASIC PROMO',
      price: 100,
      delivery: '4 DAYS DELIVERY',
      features: ['BASIC 2 logo concept', 'vector file', 'source file', '3D images'],
      buttonLabel: 'Basic',
    },
    {
      title: 'Standard',
      promo: 'STANDARD PROMO',
      price: 300,
      delivery: '4 DAYS DELIVERY',
      features: ['STANDARD 2 logo concept', 'vector file', 'source file', '3D images'],
      buttonLabel: 'Standard',
    },
    {
      title: 'Premium',
      promo: 'PREMIUM PROMO',
      price: 500,
      delivery: '4 DAYS DELIVERY',
      features: ['PREMIUM 2 logo concept', 'vector file', 'source file', '3D images'],
      buttonLabel: 'Premium',
    },
  ];

  return (
    <div style={styles.cardContainer}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

const styles = {
    cardContainer: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        margin: 0,
        backgroundColor: '#f0f2f5',
    },
    card: {
        backgroundColor: '#e0e8ff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '230px',
        textAlign: 'left',
        overflow: 'hidden',
    },
    cardHeader: {
        backgroundColor: '#b0c4ff',
        padding: '10px 0',
        textAlign: 'center',
    },
    promo: {
        marginLeft: '-15px',
        fontSize: '15px',
        color: '#333',
    },
    cardContent: {
        padding: '20px',
    },
    price: {
        fontSize: '15px',
        color: '#000',
        marginLeft: '150px',
        marginTop: '-35px',
    },
    delivery: {
        fontSize: '16px',
        color: '#333',
        margin: '10px 0',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: '20px 0',
    },
    listItem: {
        margin: '5px 0',
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '50px',
       },
};

export default App;
