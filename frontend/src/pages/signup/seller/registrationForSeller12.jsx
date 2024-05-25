// eslint-disable-next-line no-unused-vars
// import React from 'react'
import RegistrationForm from "../../../components/ragistration/registrationForSeller12";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
export default function sellerSignup() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="p-5">
        <RegistrationForm />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
