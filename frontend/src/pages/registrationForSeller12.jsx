// eslint-disable-next-line no-unused-vars
// import React from 'react'
import RegistrationForm from "../components/registrationForSeller12";
<<<<<<< HEAD
import Navbar from "../components/navbar";
import Footer from "../components/footer";



export default function buyerSignup() {
  return (
    <div>
      <Navbar />
      <RegistrationForm />
      <Footer />
=======
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
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
>>>>>>> 1f37a2b6bd458d4d7161dd11166b7276ca5390b9
    </div>
  );
}
