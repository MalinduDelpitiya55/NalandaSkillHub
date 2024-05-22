import React from 'react';
import Logo from "./../assets/images/home/logo.png";

function Footer() {
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

            .barnd{
              color: white;
            }
        `}
      </style>


    <footer className="footer pt-5 pb-3 px-3 px-sm-4 px-md-5 border-top border-1 border-opacity-10 text-muted">
      <div className="footer-links d-flex flex-wrap justify-content-lg-between" style={{ columnGap: '15px' }}>
        <div className="mb-4 links-categories" style={{ minWidth: '160px' }}>
          <p className="text-white fw-semibold fs-6">Categories</p>
          <ul>
            <li><a href="#">Graphics & Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Writing & Translation</a></li>
            <li><a href="#">Video & Animation</a></li>
            <li><a href="#">Music & Audio</a></li>
            <li><a href="#">Programming & Tech</a></li>
          </ul>
        </div>
        <div className="mb-4 links-about" style={{ minWidth: '160px' }}>
          <p className="text-white fw-semibold fs-6">About</p>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & News</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="mb-4 links-support" style={{ minWidth: '160px' }}>
          <p className="text-white fw-semibold fs-6">Support</p>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Trust & Safety</a></li>
            <li><a href="#">Selling on ProConnect</a></li>
            <li><a href="#">Buying on ProConnect</a></li>
          </ul>
        </div>
        <div className="mb-4 links-community" style={{ minWidth: '160px' }}>
          <ul>
            <li><a href="#"><img src={Logo} width="260" height="54" alt="proconnect" /></a></li>
            <li><a href="#">+0125454548</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-rights-wrapper py-3 my-auto border-top border-1 border-opacity-10 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center">
        <div className="footer-rights d-flex flex-column flex-md-row justify-content-center align-items-center" style={{ gap: '18px' }}>
          <img src={Logo} width="130" height="27" alt="proconnect" />
          <div className="barnd text-center align-middle my-auto">© ProConnect IUHS Nalanda Campus. 2024</div>
        </div>
        <div className="footer-social d-flex flex-column flex-md-row justify-content-center align-items-center" style={{ columnGap: '15px' }}>
          <ul className="d-flex align-items-center my-auto">
            <li className="p-2">
              <a href="#">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="grey">
                  
                </svg>
                English
              </a>
            </li>
            <li className="p-2">
              <a href="#">
                $ USD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    </>
  );
}

export default Footer;
