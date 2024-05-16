//import React from "react";
import { useState} from "react";


  const SellerOrBuyer = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (selectedOption === "client") {
        // Redirect to page 1
        window.location.href = "/buyerRegistration";
      } else if (selectedOption === "freelancer") {
        // Redirect to page 2
        window.location.href = "/sellerRegistration12";
      }
    };

    return (
      <div className="container mt-5">
        <div className="text-center mt-5">
          <h1>Join as a client or Freelancer</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-12 d-flex flex-lg-row flex-column flex-md-row justify-content-center">
              <div className="card col-lg-2 col-sm-10 m-3">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <h5 className="card-title">icon</h5>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="html"
                        name="user"
                        value="client"
                        checked={selectedOption === "client"}
                        onChange={handleOptionChange}
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                      />
                    </div>
                  </div>
                  <p className="card-text">
                    I’m a client, hiring for a project
                  </p>
                </div>
              </div>
              <div className="card col-lg-2 col-sm-10 m-3">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <h5 className="card-title">icon</h5>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="freelancer"
                        name="user"
                        value="freelancer"
                        checked={selectedOption === "freelancer"}
                        onChange={handleOptionChange}
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                      />
                    </div>
                  </div>
                  <p className="card-text">
                    I’m a freelancer, looking for work
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center mt-2">
              <button type="submit" className="btn btn-outline-primary">
                Create Account
              </button>
            </div>
            <div className="col-lg-12 text-center mt-4">
              <p>
                Already have an account? <a href="#">Log In</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  };

export default SellerOrBuyer;