// import React from 'react';

function RequirementForm() {
    return (
        <div style={styles.formContainer}>
            <div style={styles.formWrapper}>
                <form action="index.html" method="post">
                    <h1 style={styles.formTitle}>Requirement Form</h1>

                    <fieldset style={styles.fieldset}>
                        <label htmlFor="title">Job Post Title:</label>
                        <input type="text" id="title" name="title" style={styles.inputStyle} />

                        <label htmlFor="file1">Upload Five Images:</label>
                        <input type="file" id="file1" name="file1" style={styles.inputStyle} />
                        <input type="file" id="file2" name="file2" style={styles.inputStyle} />
                        <input type="file" id="file3" name="file3" style={styles.inputStyle} />
                        <input type="file" id="file4" name="file4" style={styles.inputStyle} />
                        <input type="file" id="file5" name="file5" style={styles.inputStyle} />

                        <label htmlFor="aboutGig">About This Job Post:</label>
                        <textarea id="aboutGig" name="aboutGig" style={styles.textareaStyle}></textarea>

                        <label htmlFor="job">Job Category:</label>
                        <select id="job" name="user_job" style={styles.inputStyle}>
                            <option value="frontend_developer">Graphics & Design</option>
                            <option value="php_developer">Digital Marketing</option>
                            <option value="python_developer">Programming & Tech</option>
                            <option value="rails_developer">Business</option>
                            <option value="web_designer">Photography</option>
                            <option value="wordpress_developer">Portraits & Caricatures</option>
                        </select>

                        <label htmlFor="package">Packages:</label>

                        <div style={styles.cardSet}>
                            <div style={styles.card}>
                                <div style={styles.cardHeader}>
                                    <h2>Basic</h2>
                                </div>
                                <div style={styles.cardContent}>
                                    <h3 style={styles.cardTitle}>BASIC PROMO</h3>
                                    <label htmlFor="priceBasic">Price:</label>
                                    <input type="text" id="priceBasic" style={styles.inputStyle} />
                                    <label htmlFor="deliveryTimeBasic">Delivery Time:</label>
                                    <select id="deliveryTimeBasic" name="deliveryTime" style={styles.inputStyle}>
                                        <option value="day1">1 Day Delivery</option>
                                        <option value="day2">2 Days Delivery</option>
                                        <option value="day3">3 Days Delivery</option>
                                        <option value="day4">4 Days Delivery</option>
                                        <option value="day5">5 Days Delivery</option>
                                    </select>
                                    <label htmlFor="revisionsBasic">Revisions:</label>
                                    <select id="revisionsBasic" name="revisions" style={styles.inputStyle}>
                                        <option value="day1">1</option>
                                        <option value="day2">2</option>
                                        <option value="day3">3</option>
                                        <option value="day4">4</option>
                                        <option value="day5">5</option>
                                    </select>
                                    <label htmlFor="detailsBasic">Describe the details of your offering:</label>
                                    <textarea id="detailsBasic" style={styles.textareaStyle}></textarea>
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
                                    <input type="text" id="priceStandard" style={styles.inputStyle} />
                                    <label htmlFor="deliveryTimeStandard">Delivery Time:</label>
                                    <select id="deliveryTimeStandard" name="deliveryTime" style={styles.inputStyle}>
                                        <option value="day1">1 Day Delivery</option>
                                        <option value="day2">2 Days Delivery</option>
                                        <option value="day3">3 Days Delivery</option>
                                        <option value="day4">4 Days Delivery</option>
                                        <option value="day5">5 Days Delivery</option>
                                    </select>
                                    <label htmlFor="revisionsStandard">Revisions:</label>
                                    <select id="revisionsStandard" name="revisions" style={styles.inputStyle}>
                                        <option value="day1">1</option>
                                        <option value="day2">2</option>
                                        <option value="day3">3</option>
                                        <option value="day4">4</option>
                                        <option value="day5">5</option>
                                    </select>
                                    <label htmlFor="detailsStandard">Describe the details of your offering:</label>
                                    <textarea id="detailsStandard" style={styles.textareaStyle}></textarea>
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
                                    <input type="text" id="pricePremium" style={styles.inputStyle} />
                                    <label htmlFor="deliveryTimePremium">Delivery Time:</label>
                                    <select id="deliveryTimePremium" name="deliveryTime" style={styles.inputStyle}>
                                        <option value="day1">1 Day Delivery</option>
                                        <option value="day2">2 Days Delivery</option>
                                        <option value="day3">3 Days Delivery</option>
                                        <option value="day4">4 Days Delivery</option>
                                        <option value="day5">5 Days Delivery</option>
                                    </select>
                                    <label htmlFor="revisionsPremium">Revisions:</label>
                                    <select id="revisionsPremium" name="revisions" style={styles.inputStyle}>
                                        <option value="day1">1</option>
                                        <option value="day2">2</option>
                                        <option value="day3">3</option>
                                        <option value="day4">4</option>
                                        <option value="day5">5</option>
                                    </select>
                                    <label htmlFor="detailsPremium">Describe the details of your offering:</label>
                                    <textarea id="detailsPremium" style={styles.textareaStyle}></textarea>
                                    <button type="submit " style={styles.cardButton}>Premium</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <button type="submit" style={styles.buttonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f0f2f5',
    },
    formWrapper: {
        maxWidth: '800px',
        width: '100%',
        margin: '10px auto',
        padding: '20px',
        backgroundColor: '#82aaf3',
        borderRadius: '8px',
    },
    formTitle: {
        margin: '0 0 30px 0',
        textAlign: 'center',
    },
    fieldset: {
        border: 'none',
    },
    inputStyle: {
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
    },
    textareaStyle: {
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
        resize: 'vertical',
    },
    buttonStyle: {
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
        marginTop: '20px',
    },
    cardSet: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#e0e8ff',
        borderRadius: '10px',
        width: '130px',
        textAlign: 'left',
        overflow: 'hidden',
        flex: '1 1 200px',
        margin: '10px',
    },
    cardHeader: {
        backgroundColor: '#b0c4ff',
        padding: '10px 0',
        textAlign: 'center',
    },
    cardContent: {
        padding: '20px',
    },
    cardTitle: {
        marginLeft: '-15px',
        fontSize: '15px',
        color: '#333',
    },
    cardButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        
        
    },
};

export default RequirementForm;
