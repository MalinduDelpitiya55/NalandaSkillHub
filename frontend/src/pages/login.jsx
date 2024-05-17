// eslint-disable-next-line no-unused-vars
import React from 'react'

import Login from "./../components/login";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
export default function buyerSignup() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="mt-5">
        <Login />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

