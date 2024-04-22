// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/navbar'
import LoginPage from "./components/registrationForSeller";
import "bootstrap/dist/css/bootstrap.min.css"
import * as mdb from "mdb-ui-kit"; // lib
window.mdb = mdb;
import "@fortawesome/fontawesome-free/css/all.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <LoginPage />
    </div>
  );
}
