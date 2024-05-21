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


                        <div>
                            <PromoPackage/>
                        </div>

                        <br /><br />
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
};

export default RequirementForm;
