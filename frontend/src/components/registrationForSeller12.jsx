import { useRef, useState } from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import Tagify from "./tagInput";
import "./css/signin-seller.css";
import DefaultPP from "./../assets/images/profile-circle.svg";
function MultiStepForm() {

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Send formData to backend for processing
    const response = await axios.post(
      "http://localhost:5000/sellerRegistration12",
      formData
    );
    console.log("Form submitted:", response.data);
    // Reset form data after successful submission if needed
    setFormData({
      fname: "",
      mname: "",
      lname: "",
      uname: "",
      email: "",
      phoneNumber: "",
      dob: "",
      gender: "",
      password: "",
      confirmPassword: "",
      country: "",
      timezone: "",
      description: "",
      skills: [],
      profilePicture: null,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    uname: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    country: "",
    timezone: "",
    description: "",
    skills: [],
    profilePicture: null,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };


  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      return false;
    }
  };
  const [file, setFile] = useState(null); // Set an initial value (default image)

  function handleChangeForpp(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="row p-5" style={{ backgroundColor: "#ecf8ff" }}>
            <div
              className="col-lg-6 col-xl-6  p-5"
              id="Signin-Background"
            ></div>
            <div className="col-lg-6 col-xl-6 col-md-12">
              <div className="card   p-2" style={{backgroundColor: "#ecf8ff"}}>
                <div className=" mx-3 ">
                  <h2>Step 1</h2>
                  <div className="row mx-5  mt-5">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-0">
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="col-12"
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
                        className="col-12"
                        value={formData.lname}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="row mx-5 mt-lg-5  mt-md-4 mt-sm-4">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 ">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="col-12"
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
                  <div className="row mx-5 mt-lg-5  mt-md-4 mt-sm-4">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 ">
                      <div className="col-12">
                        <div className="input-group ">
                          <input
                            type={showPassword1 ? "text" : "password"}
                            className="form-control "
                            id="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            ref={passwordRef}
                            required
                          />
                          <span
                            className="input-group-text eye-icon"
                            onClick={togglePasswordVisibility1}
                          >
                            <FontAwesomeIcon
                              icon={showPassword1 ? faEyeSlash : faEye}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                      <div className="col-12">
                        <div className="input-group ">
                          <input
                            type={showPassword2 ? "text" : "password"}
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            ref={confirmPasswordRef}
                            required
                          />
                          <span
                            className="input-group-text eye-icon"
                            onClick={togglePasswordVisibility2}
                          >
                            <FontAwesomeIcon
                              icon={showPassword2 ? faEyeSlash : faEye}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-lg-5  mt-md-4 mt-sm-4 mx-5">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 ">
                      <div className="col-12 d-flex flex-row">
                        <label htmlFor="dob">Birthday :</label>

                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          className="flex-fill"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                      <div className="col-12 d-flex flex-row">
                        <select
                          className="form-select form-select-sm"
                          aria-label="Default select example"
                          value={formData.gender}
                          onChange={handleChange}
                          name="gender" // Add name attribute
                        >
                          <option value="" disabled selected>
                            Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row mx-5  mt-lg-5  mt-md-4 mt-sm-4">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 ">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="col-12"
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
                        className="col-12"
                        value={formData.timezone}
                        onChange={handleChange}
                        placeholder="Timezone"
                      />
                    </div>
                  </div>
                  <div className="row mx-5  mt-lg-5  mt-md-4 mt-sm-4">
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 mt-0"></div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-10 mt-lg-0 mt-md-0 mt-sm-4 mb-sm-4">
                      <div className="col d-flex justify-content-end ">
                        <div className="">
                          <button
                            className="btn btn-primary px-5"
                            onClick={nextStep}
                          >
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
      case 2:
        return (
          <div className="row -5" style={{backgroundColor: "#ecf8ff"}}>
            <div
              className="col-lg-6 col-xl-6  p-5"
              id="Signin-Background"
            ></div>
            <div className="col-lg-6 col-xl-6 col-md-12">
              <div className="card  p-4 ">
                <div>
                  <h2>Step 2</h2>

                  <table className="mx-5">
                    <tr>
                      <td className="col">Profile Picture</td>
                      <td className="text-center col-6 align-items-center  ">
                        <div className="profile-picture ">
                          {file ? (
                            <img
                              src={file}
                              alt="Profile"
                              className="rounded-circle"
                              width={100}
                              height={100}
                            />
                          ) : (
                            <img
                              src={DefaultPP}
                              alt="Default Profile"
                              className="rounded-circle"
                              width={100}
                              height={100}
                            />
                          )}
                        </div>

                        {/* Input for selecting a new profile picture */}
                        <div className="custom-file ">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="profilePicture"
                            onChange={handleChangeForpp}
                            accept="image/*"
                          />
                        </div>
                      </td>
                    </tr>
                  </table>

                  <table className="mx-5 mt-5">
                    <tr className="col-7">
                      <td className="col-1">
                        <label htmlFor="uname">User Name:</label>
                      </td>
                      <td className="col-3 px-4">
                        <input
                          type="text"
                          id="uname"
                          name="uname"
                          className="form-control col-2"
                          value={formData.uname}
                          onChange={handleChange}
                          placeholder="User Name"
                        />
                      </td>
                    </tr>
                    <tr className="col-7">
                      <td className=" col-1">
                        <label htmlFor="email" className="mt-5">
                          Description:
                        </label>
                      </td>
                      <td className="col-6 px-4">
                        <textarea
                          type="description"
                          id="description"
                          name="description"
                          className="form-control mt-5"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>

                    <tr className="col-8 ">
                      <td className="col-1 align-items-start ">
                        <label htmlFor="Tagify" className="mt-5">
                          Add your Skills:
                        </label>
                      </td>
                      <td className="col-4">
                        <Tagify />
                      </td>
                    </tr>
                  </table>
                  <div className="d-flex flex-row mt-5">
                    <div className="col">
                      <div className="mx-3">
                        <button
                          className="btn btn-primary px-5"
                          onClick={prevStep}
                        >
                          Previous
                        </button>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <div className="mx-5">
                        <button className="btn btn-primary px-5" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      {renderForm()}
    </form>
  );
}

export default MultiStepForm;
