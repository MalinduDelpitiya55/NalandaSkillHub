import React from "react";
import './js/nav.js';
import Logo from "./../assets/images/home/logo.png";
import Logo1 from "./../assets/images/home/logo1.png";

function Navbars() {
  return (
    <>
     {/* CSS */}
     <style>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          
          body {
            --primary--color: #0b014c;
            --primary--color-p: #0b014c;
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: "Roboto", sans-serif !important;
          }
          
          /* Navbar */
          
          .hedertitle li{
            padding-right: 40px;
          }
          
          ul {
            list-style: none;
            padding: 0 !important;
          }
          
          a:link {
            text-decoration: none;
          }
          
          #top-nav {
            z-index: 0;
          }
          
          nav ul > li {
            cursor: pointer;
            
          }
          
          nav {
            z-index: 10 !important;
            background-color: #0b014c;
          }
          
          
          #sidebar{
            background-color: var(--primary--color) !important;
          }
          
          #mobile-nav > #sidebar {
            width: 250px;
            overflow-x: hidden;
            margin-left: -250px;
            transition: margin 0.05s linear;
          }
          
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.466);
            backdrop-filter: blur(1px);
            z-index: 10;
          }
          
          .join-btn:hover {
            border-color: var(--primary--color) !important;
            background-color: var(--primary--color) !important;
          }
          
          .join-btn-second {
            color: var(--primary--color);
            border-color: var(--primary--color) !important;
          }
          
          .join-btn-second:hover {
            color: #ffffff;
            background-color: var(--primary--color) !important;
          }
          
          .nav-options {
            top: 60px !important;
            
            
          }
          .nav-options-content{
            background-color: #0b014c;
          }
          .nav-options a {
            color: #ffffff !important;
            white-space: nowrap;
          }
          
          .nav-options-content {
            height: 40px;
          }
          
          .nav-options ul {
            overflow-x: auto;
          }
          
          .nav-options ul::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .nav-options ul {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          
          .nav-options li {
            position: relative;
            margin: 0 10px;
          }
          
          .nav-options li:hover::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            top: 31px;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-bottom: 2px solid var(--primary--color-p);
            transition: width 0.05s linear;
          }
        `}
      </style>
<div>
      {/* Top navbar */}
      <nav className="p-0 fixed-top text-white" id="top-nav">
        <div className="top-nav row mx-auto my-auto pt-3 pb-3 w-100 container-fluid text-white">
          <div className="toggle-btn col-auto text-white text-start p-0 d-md-none" style={{ cursor: 'pointer' }} id="nav-toggler">
            <span className=" bi bi-list fs-2 text-start ms-0 me-auto"></span>
          </div>
          <a href="#" className="nav-logo col-sm col-8 mx-auto mx-sm-0 text-sm-start text-center my-auto">
            <div style={{ width: 'fit-content' }} className="mx-auto mx-sm-0">
              <img className="nav-logo-white d-block" src={Logo} width="170" height="33" alt="proconnect" />
              <img className="nav-logo-black d-none" src={Logo1} width="170" height="33" alt="proconnect" />
            </div>
          </a>
          <ul className="hedertitle d-none d-md-flex text-white col-auto row fw-semibold my-auto">
            <li className="col-auto d-none d-lg-block">
              <svg width="18" height="18" fill="white" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"></svg>
              English
            </li>
            <li className="col-auto d-none d-lg-block">$ USD</li>
          </ul>
          <a href="#" className="d-none d-sm-block text-white col-auto my-auto text-end fs-6 fw-semibold">Sign In</a>
          <a href="#" className="join-btn col-auto my-auto text-white text-end fs-6 px-3 py-1 fw-semibold border border-1 border-white rounded-2">Join</a>
        </div>
      </nav>
      {/* Options nav */}
      <nav className="nav-options border-top border-bottom border-1 p-0 fixed-top d-none" id="nav-options">
        <div className="nav-options-content row d-flex mx-auto align-items-center align-middle my-auto px-4 w-100 container-fluid">
          <ul className="d-flex justify-content-between align-items-center my-auto flex-nowrap">
            <li><a href="#">Graphics & Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Writing & Translation</a></li>
            <li><a href="#">Video & Animation</a></li>
            <li><a href="#">Music & Audio</a></li>
            <li><a href="#">Programming & Tech</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Trending</a></li>
          </ul>
        </div>
      </nav>
      {/* mobile sidebar */}
      <nav className="mobile-nav text-nowrap" id="mobile-nav">
        <div className="fixed-top text-muted vh-100 px-3 pt-3" id="sidebar">
          <ul className="fw-normal d-flex flex-column mx-auto">
            <li className="join-btn col-auto mt-2 mb-3  fs-6 px-3 w-60 py-2 fw-semibold text-white border rounded-">
              Join ProConnect
            </li>
            <li className="col-auto my-2 fs-6">Sign in</li>
          </ul>
          <hr />
          <ul className="fw-normal d-flex flex-column mx-auto">
            <li className="col-auto my-2 fs-6">
              <svg width="18" height="18" fill="grey" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"></svg>
              English
            </li>
            <hr />
            <li className="col-auto my-2 fs-6">$ USD</li>
          </ul>
        </div>
        <div className="mobile-nav-overlay d-none"></div>
      </nav>
      </div>
    </>
  );
}

export default Navbars;
