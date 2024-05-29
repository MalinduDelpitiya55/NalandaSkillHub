import {useRef, useState, useEffect} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import Tagify from "./skillsInputForRegister";
import "./../css/signin-seller.css";
import DefaultPP from "./../../assets/images/profile-circle.svg";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: "",
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
    profilePicture: null,
  });

  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Load saved data from local storage on component mount
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    // Save form data from the current step to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    setStep(step + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      return false;
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty required fields
    for (const key in formData) {
      if (!formData[key] && key !== "profilePicture") {
        console.error(`Error: ${key} is required`);
        return;
      }
    }

    // Prepare form data for submission
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      if (key === "profilePicture") {
        formDataToSubmit.append(key, file); // append file if profile picture is included
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    }

    // Send formData to backend for processing
    try {
      const response = await axios.post(
        "http://localhost:3306/register/sellerRegistration12",
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted:", response.data);

      // Clear form data and local storage after successful submission
      setFormData({
        fname: "",
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
        profilePicture: null,
      });
      setFile(null);
      localStorage.removeItem("formData");
    } catch (error) {
      // Detailed error logging
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Config data:", error.config);
    }
  };

  const handleChangeForpp = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="bodyreg row vh-100">
            <div className="col-lg-6 col-xl-6  p-5"></div>
            <div className="col-lg-6 col-xl-6 col-md-12">
              <div className="singcard p-2 bg-opacity-50">
                <div className=" mx-3 ">
                  <h2 className="step1">Step 1</h2>
                  <div className="row mx-5  mt-5">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-0">
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input1  col-12"
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
                        className="input1 col-12"
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
                        className="input1 col-12"
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
                        className="input1 col-12"
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
                            className="input1 form-control "
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
                        <div className="input-group">
                          <input
                            type={showPassword2 ? "text" : "password"}
                            className="input1 form-control"
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
                  <div className="row mt-lg-5 mt-md-4 mt-sm-4 mx-5">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4">
                      <div className="col-12 d-flex flex-row">
                        <label className="lbbirthday" htmlFor="dob">
                          Birthday :{" "}
                        </label>

                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          className="input2 flex-fill"
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 mt-lg-0 mt-md-4 mt-sm-4">
                      <div className="col-12 d-flex flex-row">
                        <select
                          className="input3 form-select form-select-sm"
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
                        className="input1 col-12"
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
                        className="input1 col-12"
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
          <div className="bodyreg row -5" style={{backgroundColor: "#ecf8ff"}}>
            <div  className="col-lg-6 col-xl-6  p-5" id="Signin-Background"></div>
            <div className="col-lg-6 col-xl-6 col-md-12">
              <div className="singcard  p-4 ">
                <div>
                  <h2 className="step2">Step 2</h2>

                  <table className="mx-5">
                    <tr>
                      <td className="step2lb col">Profile Picture</td>
                      <td className="text-center col-6 align-items-center  ">
                        <div className="profile-picture ">
                          {file ? (
                            <img
                              src={URL.createObjectURL(file)}
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
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input form-control"
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
                        <label htmlFor="uname" className="step2lb">
                          User Name:
                        </label>
                      </td>
                      <td className="col-3 px-4">
                        <input
                          type="text"
                          id="uname"
                          name="uname"
                          className="input1 form-control col-2"
                          value={formData.uname}
                          onChange={handleChange}
                          placeholder="User Name"
                        />
                      </td>
                    </tr>
                    <tr className="col-7">
                      <td className=" col-1">
                        <label htmlFor="email" className="step2lb mt-5">
                          Description:
                        </label>
                      </td>
                      <td className="col-6 px-4">
                        <textarea
                          id="description"
                          name="description"
                          className="input4 form-control mt-5"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>

                    <tr className="col-8 ">
                      <td className="col-1 align-items-start ">
                        <label htmlFor="Tagify" className="step2lb mt-5">
                          Add your Skills:
                        </label>
                      </td>
                      <td className=" col-4">
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
