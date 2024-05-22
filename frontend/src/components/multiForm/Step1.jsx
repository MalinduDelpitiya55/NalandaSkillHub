import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className="row p-5" style={{ backgroundColor: "#ecf8ff" }}>
      <div className="col-lg-5 col-xl-5 p-5" id="Signin-Background"></div>
      <div className="col-lg-7 col-xl-7 col-md-12">
        <div className="card p-2" style={{ backgroundColor: "#ecf8ff" }}>
          <div className="mx-3">
            <h2>Step 1</h2>
            <div className="row mx-5 mt-5">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-0">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="form-control col-12"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-4">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="form-control col-12"
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mx-5 mt-lg-5 mt-md-4 mt-sm-4">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control col-12"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="col-12"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="row mx-5 mt-lg-5 mt-md-4 mt-sm-4">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="Password"
                      required
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={togglePasswordVisibility1}
                    >
                      <FontAwesomeIcon icon={showPassword1 ? faEyeSlash : faEye} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                <div className="col-12">
                  <div className="input-group">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                    />
                    <span
                      className="input-group-text eye-icon"
                      onClick={togglePasswordVisibility2}
                    >
                      <FontAwesomeIcon icon={showPassword2 ? faEyeSlash : faEye} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 mt-md-4 mt-sm-4 mx-5">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4">
                <div className="col-12 d-flex flex-row">
                  <label htmlFor="dob">Birthday :</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="form-control flex-fill"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                <div className="col-12 d-flex flex-row">
                  <select
                    className="form-select form-select-sm form-control"
                    aria-label="Default select example"
                    value={formData.gender}
                    onChange={handleChange}
                    name="gender"
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mx-5 mt-lg-5 mt-md-4 mt-sm-4">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4">
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="col-12 form-control"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                <input
                  type="text"
                  id="timezone"
                  name="timezone"
                  className="form-control col-12"
                  value={formData.timezone}
                  onChange={handleChange}
                  placeholder="Timezone"
                />
              </div>
            </div>
            <div className="row mx-5 mt-lg-5 mt-md-4 mt-sm-4">
              <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 mt-0"></div>
              <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 mt-lg-0 mt-md-0 mt-sm-4 mb-sm-4">
                <div className="col d-flex justify-content-end">
                  <div>
                    <button className="btn btn-primary px-5" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Step1.propTypes = {
  formData: PropTypes.shape({
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Step1;
