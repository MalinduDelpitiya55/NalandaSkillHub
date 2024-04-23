// eslint-disable-next-line no-unused-vars
import React from "react";

function SellerRegistrarion() {
  return (
    <form className="m-4">
      {/* 2 column grid layout with text inputs for the first and last names */}
      <div className="row mb-4">
        <div className="col-lg-6 col-md-10 ">
          <div data-mdb-input-init className="form-outline">
            <input type="text" id="form6Example1" className="form-control" />
            <label className="form-label" htmlFor="form6Example1">
              First name
            </label>
          </div>
        </div>
        <div className="col-lg-6 col-md-10 ">
          <div data-mdb-input-init className="form-outline">
            <input type="text" id="form6Example2" className="form-control" />
            <label className="form-label" htmlFor="form6Example2">
              Last name
            </label>
          </div>
        </div>
      </div>

      {/* Text input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="form6Example3" className="form-control" />
        <label className="form-label" htmlFor="form6Example3">
          Company name
        </label>
      </div>

      {/* Text input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="form6Example4" className="form-control" />
        <label className="form-label" htmlFor="form6Example4">
          Address
        </label>
      </div>

      {/* Email input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="form6Example5" className="form-control" />
        <label className="form-label" htmlFor="form6Example5">
          Email
        </label>
      </div>

      {/* Number input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="number" id="form6Example6" className="form-control" />
        <label className="form-label" htmlFor="form6Example6">
          Phone
        </label>
      </div>

      {/* Message input */}
      <div data-mdb-input-init className="form-outline mb-4">
        <textarea
          className="form-control"
          id="form6Example7"
          rows="4"
        ></textarea>
        <label className="form-label" htmlFor="form6Example7">
          Additional information
        </label>
      </div>

      {/* Checkbox */}
      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="form6Example8"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="form6Example8">
          {" "}
          Create an account?{" "}
        </label>
      </div>

      {/* Submit button */}
      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        Place order
      </button>
    </form>
  );
}

export default SellerRegistrarion;
