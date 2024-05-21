import React, { useState } from 'react';
import './App.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    state: '',
    address: '',
    city: '',
    postalCode: '',
    vatNumber: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    cardholderName: '',
    description: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      fullName: '',
      companyName: '',
      country: '',
      state: '',
      address: '',
      city: '',
      postalCode: '',
      vatNumber: '',
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
      cardholderName: '',
      description: '',
      file: null
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Details</h2>
      <div className="form-section">
        <div className="column">
          <label>
            Full Name
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </label>
          <label>
            Company Name
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </label>
          <label>
            Country
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </label>
          <label>
            State/Region
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </label>
        </div>
        <div className="column">
          <label>
            Address
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            City
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <label>
            Postal Code
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </label>
          <label>
            VAT Number
            <input type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className="button-group">
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button type="submit" className="save-button">Save</button>
      </div>
      

      <h2>Payment Options</h2>
      <div className="payment-section">
        <label>
          <input type="radio" name="paymentMethod" value="creditCard" defaultChecked />
          Credit & Debit Card
        </label>
        <label>
          Card Number
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        </label>
        <label>
          Expiration Date
          <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
        </label>
        <label>
          Security Code
          <input type="text" name="securityCode" value={formData.securityCode} onChange={handleChange} />
        </label>
        <label>
          Cardholder's Name
          <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleChange} />
        </label>
      </div>

      <h2>Submit Requirements</h2>
      <div className="submit-section">
        <label>
          Describe what you need
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label className="file-label">
          Attach Your File
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <button type="submit" className="submit-button">Save</button>
      </div>
    </form>
  );
};

export default OrderForm;
