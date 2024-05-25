// eslint-disable-next-line no-unused-vars
import React from "react";

import User from "../../components/login/sellerOrBuyer";
import Navbar from "./../../components/navbar/navbar";
import Footer from "./../../components/footer/footer";
export default function user() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="mt-5">
        <User />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
