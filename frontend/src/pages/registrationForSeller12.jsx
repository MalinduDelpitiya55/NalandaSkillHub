// eslint-disable-next-line no-unused-vars
// import React from 'react'
import RegistrationForm from "../components/registrationForSeller12";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
export default function sellerSignup() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="REGISTER">
        <RegistrationForm />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
