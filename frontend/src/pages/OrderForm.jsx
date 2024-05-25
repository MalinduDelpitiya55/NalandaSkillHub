import React, { useState } from 'react';

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
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
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
      description: '',
      file: null,
    });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const columnStyle = {
    flex: 1,
    marginRight: '10px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const textareaStyle = {
    width: 'calc(100% - 20px)',
    height: '100px',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    resize: 'none',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    color: '#000',
    marginRight: '10px',
  };

  const saveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#000',
    color: '#fff',
  };

  const fileLabelStyle = {
    display: 'block',
    width: 'calc(100% - 20px)',
    padding: '20px',
    marginTop: '5px',
    border: '4px dashed #ccc',
    borderRadius: '4px',
    textAlign: 'center',
    color: '#999',
    cursor: 'pointer',
  };

  const fileInputStyle = {
    display: 'none',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Order Details</h2>
      <div style={sectionStyle}>
        <div style={columnStyle}>
          <label style={labelStyle}>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Company Name
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Country
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            State/Region
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
        </div>
        <div style={columnStyle}>
          <label style={labelStyle}>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            Postal Code
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            VAT Number
            <input
              type="text"
              name="vatNumber"
              value={formData.vatNumber}
              onChange={handleChange}
              style={inputStyle}
            />
          </label>
        </div>
      </div>
      <div style={buttonGroupStyle}>
        <button
          type="button"
          style={cancelButtonStyle}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" style={saveButtonStyle}>
          Save
        </button>
      </div>

      <h2>Submit Requirements</h2>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>
          Describe what you need
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={textareaStyle}
          />
        </label>
        <label style={fileLabelStyle}>
          
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            style={fileInputStyle}
          />
          {formData.file ? formData.file.name : 'Attach Your File'}
        </label>
      </div>
      <div style={buttonGroupStyle}>
        <button type="submit" style={saveButtonStyle}>
          Save
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
