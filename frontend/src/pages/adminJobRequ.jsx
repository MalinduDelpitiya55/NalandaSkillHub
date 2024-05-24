import React from 'react';
import PromoPackage from './../components/promoPackage';

function RequirementForm() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '10px auto', padding: '10px 20px', background: '#82aaf3', borderRadius: '8px' }}>
                <form action="index.html" method="post">
                    <h1 style={{ margin: '0 0 30px 0', textAlign: 'center' }}>Requirement Form</h1>

                    <fieldset style={{ border: 'none' }}>
                        <label htmlFor="title">Job Post Title:</label>
                        <input type="text" id="title" name="title" style={inputStyle} />

                        <label htmlFor="file1">Upload Five Images:</label>
                        <input type="file" id="file1" name="file1" style={inputStyle} />
                        <input type="file" id="file2" name="file2" style={inputStyle} />
                        <input type="file" id="file3" name="file3" style={inputStyle} />
                        <input type="file" id="file4" name="file4" style={inputStyle} />
                        <input type="file" id="file5" name="file5" style={inputStyle} /><br />

                        <label htmlFor="aboutGig">About This Job Post:</label>
                        <textarea id="aboutGig" name="aboutGig" style={inputStyle}></textarea>

                        <br />
                        <label htmlFor="job">Job Category:</label>
                        <select id="job" name="user_job" style={inputStyle}>
                            <option value="frontend_developer">Graphics & Design</option>
                            <option value="php_developer">Digital Marketing</option>
                            <option value="python_developer">Programming & Tech</option>
                            <option value="rails_developer">Business</option>
                            <option value="web_designer">Photography</option>
                            <option value="wordpress_developer">Portraits & Caricatures</option>
                        </select>
                        <label htmlFor="package">Packages:</label>
                           

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '530px', margin: '0', backgroundColor: '#f0f2f5' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <h2>Basic</h2>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>BASIC PROMO</h3>
                        <label htmlFor="priceBasic">Price:</label>
                        <input type="text" id="priceBasic" /><br /><br />
                        <label htmlFor="deliveryTimeBasic">Delivery Time:</label>
                        <select id="deliveryTimeBasic" name="deliveryTime">
                            <option value="day1">1 Days Delivery</option>
                            <option value="day2">2 Days Delivery</option>
                            <option value="day3">3 Days Delivery</option>
                            <option value="day4">4 Days Delivery</option>
                            <option value="day5">5 Days Delivery</option>
                        </select><br /><br />
                        <label htmlFor="revisionsBasic">Revisions:</label>
                        <select id="revisionsBasic" name="revisions">
                            <option value="day1">1</option>
                            <option value="day2">2</option>
                            <option value="day3">3</option>
                            <option value="day4">4</option>
                            <option value="day5">5</option>
                        </select><br /><br />
                        <label htmlFor="detailsBasic">Describe the details of your offering:</label>
                        <textarea id="detailsBasic"></textarea><br /><br />
                        <button type="submit" style={styles.cardButton}>Basic</button>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <h2>Standard</h2>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>STANDARD PROMO</h3>
                        <label htmlFor="priceStandard">Price:</label>
                        <input type="text" id="priceStandard" /><br /><br />
                        <label htmlFor="deliveryTimeStandard">Delivery Time:</label>
                        <select id="deliveryTimeStandard" name="deliveryTime">
                            <option value="day1">1 Days Delivery</option>
                            <option value="day2">2 Days Delivery</option>
                            <option value="day3">3 Days Delivery</option>
                            <option value="day4">4 Days Delivery</option>
                            <option value="day5">5 Days Delivery</option>
                        </select><br /><br />
                        <label htmlFor="revisionsStandard">Revisions:</label>
                        <select id="revisionsStandard" name="revisions">
                            <option value="day1">1</option>
                            <option value="day2">2</option>
                            <option value="day3">3</option>
                            <option value="day4">4</option>
                            <option value="day5">5</option>
                        </select><br /><br />
                        <label htmlFor="detailsStandard">Describe the details of your offering:</label>
                        <textarea id="detailsStandard"></textarea><br /><br />
                        <button type="submit" style={styles.cardButton}>Standard</button>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <h2>Premium</h2>
                    </div>
                    <div style={styles.cardContent}>
                        <h3 style={styles.cardTitle}>PREMIUM PROMO</h3>
                        <label htmlFor="pricePremium">Price:</label>
                        <input type="text" id="pricePremium" /><br /><br />
                        <label htmlFor="deliveryTimePremium">Delivery Time:</label>
                        <select id="deliveryTimePremium" name="deliveryTime">
                            <option value="day1">1 Days Delivery</option>
                            <option value="day2">2 Days Delivery</option>
                            <option value="day3">3 Days Delivery</option>
                            <option value="day4">4 Days Delivery</option>
                            <option value="day5">5 Days Delivery</option>
                        </select><br /><br />
                        <label htmlFor="revisionsPremium">Revisions:</label>
                        <select id="revisionsPremium" name="revisions">
                            <option value="day1">1</option>
                            <option value="day2">2</option>
                            <option value="day3">3</option>
                            <option value="day4">4</option>
                            <option value="day5">5</option>
                        </select><br /><br />
                        <label htmlFor="detailsPremium">Describe the details of your offering:</label>
                        <textarea id="detailsPremium"></textarea><br /><br />
                        <button type="submit" style={styles.cardButton}>Premium</button>
                    </div>
                </div>
            </div>
        </div>
        

                        
                    </fieldset>

                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
}

const inputStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    fontSize: '16px',
    height: 'auto',
    outline: '0',
    padding: '15px',
    width: '100%',
    backgroundColor: '#e8eeef',
    color: '#2a2929fb',
    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.03) inset',
    marginBottom: '30px',
};

const buttonStyle = {
    padding: '19px 39px 18px 39px',
    color: '#FFF',
    backgroundColor: '#4919da',
    fontSize: '18px',
    textAlign: 'center',
    fontStyle: 'normal',
    borderRadius: '5px',
    width: '100%',
    border: '1px solid #0907a3',
    borderWidth: '1px 1px 3px',
    boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.1) inset',
    marginBottom: '10px',
    marginTop:'20px'
};
const styles = {
    card: {
        backgroundColor: '#e0e8ff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '230px',
        textAlign: 'left',
        overflow: 'hidden'
    },
    cardHeader: {
        backgroundColor: '#b0c4ff',
        padding: '10px 0',
        textAlign: 'center'
    },
    cardContent: {
        padding: '20px'
    },
    cardTitle: {
        marginLeft: '-15px',
        fontSize: '15px',
        color: '#333'
    },
    cardButton :{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '50px'
    }
};

export default RequirementForm;
