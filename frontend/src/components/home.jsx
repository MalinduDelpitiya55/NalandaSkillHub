import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './js/content.js';
 import './css/home.css';
 import Slideimg from './slider.jsx'
//  import Explore from './explore.jsx'
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Business from "./../assets/images/home/business.png";
import Qualities from "./../assets/images/home/qualities.png";
import Tick from "./../assets/images/home/tick.svg";
import Logo from "./../assets/images/home/logo.png";
import Logo1 from "./../assets/images/home/logo1.png";


const Home = () => {

  
  

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
              
              /* Hero section */
    
              
              .hero > div {
                width: 50%;
              }
              
              @media screen and (max-width: 992px) {
                .hero > div {
                  width: 70%;
                }
              }
              
              @media screen and (max-width: 768px) {
                .hero {
                  height: 530px;
                  background-image: none;
                }
              
                .hero > div {
                  width: 100%;
                }
              }
              
              .hero input {
                padding-top: 0.7rem;
                padding-bottom: 0.7rem;
                font-weight: 500;
                outline: none;
              }
              
              .hero input::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: gray;
                opacity: 1; /* Firefox */
              }
              
              .hero input:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: red;
              }
              
              .hero input::-ms-input-placeholder {
                /* Microsoft Edge */
                color: red;
              }
              
              .hero input[type="button"]:hover {
                background-color: var(--primary--color) !important;
              }
              
              .hero > div > div > div > span {
                font-size: 0.8rem;
                cursor: pointer;
              }
              
              .hero > div > div > div > span:hover {
                background-color: #0b014c;
                color: #ffffff;
              }
              
              /* proconnect services */
              .popular-services {
                position: relative;
              }
              
              #services-slider-wrapper::-webkit-scrollbar {
                display: none;
              }
              
              /* Hide scrollbar for IE, Edge and Firefox */
              #services-slider-wrapper {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
              }
              
              .slider-right-arrow {
                right: 10px;
                box-shadow: 1px 1px 5px 0px rgb(177, 177, 177);
              }
              
              .slider-left-arrow {
                left: 10px;
                box-shadow: -1px 1px 5px 0px rgb(177, 177, 177);
              }
              
              .slider-left-arrow, .slider-right-arrow {
                position: absolute;
                font-size: 3rem;
                line-height: 35px;
                width: 45px;
                height: 45px;
                top: 50%;
                transform: translate(0, -50%);
                background-color: white;
                border-radius: 50%;
                padding: 0 15px;
                cursor: pointer;
              }
              
              /* Our Qualities */
              .qlts-video-thumb {
                position: relative;
              }
              
              .qlts-video-thumb::after {
                content: "";
                display: inline-block;
              
                background-size: 80px;
                width: 80px;
                height: 80px;
                position: absolute;
                z-index: 0;
                cursor: pointer;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
              }
              
              /* Explore */
              #explore > div > a {
                position: relative;
              }
              
              #explore > div > a::after {
                content: "";
                position: absolute;
                width: 48px;
                height: 3px;
                top: 55px;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                border-bottom: 2px solid rgb(187, 187, 187);
                transition: width 0.05s linear;
              }
              
              #explore > div > a:hover::after {
                width: 85px;
                border-color: var(--primary--color-p);
              }
              
              
              /* Footer */
              footer{
                background-color: #0b014c;
              }
              .footer a {
                color: rgb(255, 255, 255) !important;
              }
              
              
              .footer .footer-links li {
                margin: 14px 0;
              }
              
              .footer .footer-links li a:hover {
                text-decoration: underline;
                color: yellow;
                
              }
              
              .footer-social li:hover {
                background-color: rgb(255, 255, 255);
                border-radius: 10px;
              }
        `}
      </style>
    
      <div>
        <header>
          {/* Top navbar */}
          {/* Hero section */}
          <section className="hero d-flex justify-content-start ps-md-5 px-2">
            <div className="content text-black d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
              <h1>Find the perfect <span className="fst-italic fw-normal">freelance</span> services for your business</h1>
              <div className="input-group fw-semibold w-100 mx-auto d-flex justify-content-center justify-content-md-start" style={{position: 'relative', zIndex: 1}}>
                <input className="border-0 px-3 w-75" style={{borderRadius: '5px 0 0 5px'}} placeholder="Try &quot;building mobile app&quot;" type="text" name="search" id="search" />
                <input className="border-0 px-4 text-white" style={{backgroundColor: 'var(--primary--color-p)', borderRadius: '0 5px 5px 0'}} type="button" defaultValue="Search" />
              </div>
              <div className="tag-group d-flex mt-4 align-items-center justify-content-center ">
                <div className="fw-semibold align-middle">Popular: </div>
                <div className="d-flex flex-wrap text-center align-items-center fw-semibold">
                  <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">Website Design</span>
                  <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">Wordpress</span>
                  <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">Logo Design</span>
                  <span className="border border-1 rounded-5 px-2 py-1 mx-1 mt-1">Video Editing</span>
                </div>
              </div>
            </div>
          </section>
          <section className="clients bg-secondary bg-opacity-10" id="clients-container">
          </section>
        </header>
        <main>
          {/* Popular Services */}

          <div id="Services"><Slideimg/></div>

          {/* Our Qualities */}
          <section className="our-qlts py-5 px-3 px-sm-4 px-md-5" style={{backgroundColor: '#f1fdf7'}}>
            <div className="my-5 row align-items-center">
              <div className="qlts-content col-md-5 col-12">
                <h1 style={{fontSize: '2.1rem'}} className="mb-4">A whole world of freelance talent at your fingertips</h1>
                <ul className="d-flex flex-column">
                  <li>
                    <div>
                      <img src={Tick} alt="success" />
                      <span style={{fontSize: '1.2rem'}} className="fw-semibold ms-1">The best for every budget</span>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.2rem'}}>Find high-quality services at every price point. No hourly
                      rates, just
                      project-based
                      pricing.</p>
                  </li>
                  <li>
                    <div>
                    <img src={Tick} alt="success" />
                      <span style={{fontSize: '1.2rem'}} className="fw-semibold ms-1">Quality work done quickly</span>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.2rem'}}>Find the right freelancer to begin working on your project
                      within minutes.</p>
                  </li>
                  <li>
                    <div>
                    <img src={Tick} alt="success" />
                      <span style={{fontSize: '1.2rem'}} className="fw-semibold ms-1">Protected payments, every time</span>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.2rem'}}>Always know what you'll pay upfront. Your payment isn't
                      released until you approve
                      the
                      work.</p>
                  </li>
                  <li>
                    <div>
                      <img src={Tick} alt="success" />
                      <span style={{fontSize: '1.2rem'}} className="fw-semibold ms-1">24/7 support</span>
                    </div>
                    <p className="text-muted" style={{fontSize: '1.2rem'}}>Questions? Our round-the-clock support team is available to
                      help anytime, anywhere.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 col-12" />
              <div className="qlts-video-wrapper col-md-6 col-12">
                <picture className="w-100 qlts-video-thumb">
                  <img className="w-100" style={{cursor: 'pointer'}} src={Qualities} alt="Qualities" />
                </picture>
              </div>
            </div>
          </section>
          {/* Explore */}

      
          <section className="explore py-5 px-3 px-sm-4 px-md-5" id="explore">
            <h1 className="mt-5" style={{fontSize: '2.1rem'}}>Explore the marketplace</h1>
          </section>
          {/* proconnect business */}
          <section className="fvr-busns py-5 px-3 px-sm-4 px-md-5 text-white" style={{backgroundColor: '#0d084d'}}>
            <div className="my-5 row align-items-center">
              <div className="fvr-busns-content col-md-5 col-12">
                <small>
                  <i>
                    <img src={Logo} width={170} height={33} alt="proconnect" />
                  </i>
                  <span className="bg-primary rounded-5 px-2 py-1" style={{fontSize: '10px'}}>NEW</span>
                </small>
                <h1 style={{fontSize: '2.1rem'}} className="my-4">A business solution designed for <span className="fst-italic fw-normal">teams</span>
                </h1>
                <p className="fs-5 ">Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                <ul className="d-flex flex-column">
                  <li className="d-flex my-1 align-items-start">
                    <img src={Tick} alt="success" />
                    <p style={{fontSize: '1.1rem'}} className="ms-3">Connect to freelancers with proven business experience</p>
                  </li>
                  <li className="d-flex my-1 align-items-start">
                    <img src={Tick} alt="success" />
                    <p style={{fontSize: '1.1rem'}} className="ms-3">Get matched with the perfect talent by a customer success
                      manager</p>
                  </li>
                  <li className="d-flex my-1 align-items-start">
                    <img src={Tick} alt="success" />
                    <p style={{fontSize: '1.1rem'}} className="ms-3">Manage teamwork and boost productivity with one powerful
                      workspace</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 col-12" />
              <div className="fvr-busns-img-wrapper col-md-6 col-12">
                <picture className="w-100 fvr-busns-img-thumb">
                <img className="w-100" src={Business} alt="Business" />
                </picture>
              </div>
            </div>
          </section>
        </main></div>
        </>
    );
  }

export default Home;