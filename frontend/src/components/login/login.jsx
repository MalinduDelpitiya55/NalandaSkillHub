import {useState, useRef} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import SigninIMG from "./../../assets/images/signinIMG.jpg";

function SignInForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Name validation
    if (!isEmailValid(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3306/login", {
        email,
        password,
      });console.log(res);
      if (res.status === 200) {
        const token = res.data.accessToken;
        console.log(token);
        localStorage.setItem("accessToken", token);
        navigate("/"); // Navigate to /home
      }
    } catch (error) {
      console.error("Error during Login ", error);
      if (error.response.status === 404 || error.response.status === 401) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError("Failed to Login. Please try again.");
      }
    }
  };

  return (
    <div className="container align-items-center ">
      <div className="row col-12 mt-4">
        <div className="col-5 m-4 ">
          <img src={SigninIMG} alt="Image note found" width="80%" />
        </div>

        <div className="col-5 m-4">
          <section className="vh-80 gradient-custom">
            <div className="container  h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-12 col-xl-12">
                  <div
                    className="card bg-body-secondary text-white"
                    style={{borderRadius: "1rem"}}
                  >
                    <div className="card-body p-3 p text-start">
                      <div className="mb-md-5 mt-md-4 pb-0">
                        <h2 className="fw-bold mb-2 text-uppercase text-black ">
                          Login
                        </h2>
                        <p className="text-warning mb-5">
                          Please enter your login and password!
                        </p>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label
                              htmlFor="email"
                              className="form-label text-black"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              //pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                              ref={emailRef}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="password"
                              className="form-label text-black"
                            >
                              Password
                            </label>
                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4 position-relative"
                            >
                              <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                ref={passwordRef}
                                className="form-control form-control-lg "
                                required
                              />
                              <span
                                className="input-group-text eye-icon"
                                onClick={togglePasswordVisibility}
                                style={{
                                  position: "absolute",
                                  right: "10px",
                                  top: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={showPassword ? faEyeSlash : faEye}
                                />
                              </span>
                            </div>
                          </div>
                          {error && <p className="text-danger">{error}</p>}
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-outline-light btn-lg px-5 text-black "
                            type="submit"
                          >
                            Login
                          </button>
                        </form>

                        <p className="small mb-5 pb-lg-2 mt-2">
                          <a className="text-white-50" href="#!"></a>
                        </p>
                        <p>
                          <a href="/ForgotPassword" className="link-primary">
                            Forgot password?
                          </a>
                        </p>

                        <div className="d-flex justify-content-center text-center mt-3 pt-1">
                          <a href="#!" className="text-white">
                            <i className="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-google fa-lg"></i>
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="mb-0 text-dark ">
                          Don`t have an account?{" "}
                          <Link to="/user" type="submit">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          ;
        </div>
      </div>
    </div>

  );
}

export default SignInForm;


