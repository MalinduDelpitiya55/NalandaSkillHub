// eslint-disable-next-line no-unused-vars
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BuyersRegistration from "./pages/signup/buyer/buyerSignup";
import SellerRegistration from "./pages/signup/seller/selllerSignup";
import SellerRegistration12 from "./pages/signup/seller/registrationForSeller12";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Job from "./pages/jobPost";
import OneJobPost from "./pages/gig details/oneJob";
import Profile from "./pages/profile/profile";
import ProfileEdit from "./pages/profile/profileEdit";
import Usertable from "./components/tables/usertable";
import User from "./pages/login/userChoosePage";
import ForgotPassword from "./pages/forgotPassword/fogotPassword";
import Dashboard from "./pages/dashboards/dashboard";
import Rating from "./pages/ratingForm";
import Review from "./pages/reviewDisplay";
import ActiveOrders from "./pages/order/activeOrder";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/buyerRegistration" element={<BuyersRegistration />} />
        <Route path="/sellerRegistration" element={<SellerRegistration />} />
        <Route
          path="/sellerRegistration12"
          element={<SellerRegistration12 />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/jobpost" element={<Job />} />
        <Route path="/onejobpost" element={<OneJobPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Profileedit" element={<ProfileEdit />} />
        <Route path="/adminusertable" element={<Usertable />} />
        <Route path="/ratingForm" element={<Rating />} />
        <Route path="/reviewDisplay" element={<Review />} />
        <Route path="/activeorders" element={<ActiveOrders />} />
      </Routes>
    </Router>
  );
}
