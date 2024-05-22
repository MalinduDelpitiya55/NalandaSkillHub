import  {useRef, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SigninIMG from "./../assets/images/signinIMG.jpg";

export default function BuyersRegistration() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const errorRef = useRef("");
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const isNameValid = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Name validation
    if (!isNameValid(name)) {
      errorRef.current.innerText =
        "Name should contain only letters and spaces";
      return;
    }

    // Password mismatch validation
    if (password !== confirmPassword) {
      errorRef.current.innerText = "Passwords do not match";
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/buyerRegistration", {
        name,
        email,
        password,
      });
      if (res.status === 201) {
        alert("Account created successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration ", error);
      if (error.response.status === 409) {
        alert("Email already exists. Please use a different email.");
      } else {
        alert("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <div className="container align-items-center ">
      <div className="row   col-12">
        <div className="col-6 m-2">
          <img src={SigninIMG} alt="Image note found" width="70%" />
        </div>

        <div className="col-5 mt-5 ">
          <h2 className="text-center mb-4">Sign Up</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      className="form-control"
                      id="password"
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
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
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
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="createAccount"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="createAccount">
                    Create an account?
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center mt">
                Already have an account?{" "}
                  <Link to="/login" type="submit" className="">
                    Login
                  </Link>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
