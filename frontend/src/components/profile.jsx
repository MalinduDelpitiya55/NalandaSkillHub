import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Profilepic from '../assets/images/profile/profile-img.jpg'

const CVSection = () => {
  return (
    <>
      {/* CSS */}
      <style>
        {`
          /* Color variables */
          :root {
            --white-color: #fff;
            --bg-color: #fff;
            --gray-color: #ccc;
          }

          /* Changing background color */
          body {
            background: var(--bg-color) !important;
          }

          /* Changing link color */
          .nav-item .nav-link {
            color: var(--white-color);
          }

          /* Hero section background image */
          #skills i {
            height: 100px;
            width: 100px;
          }


          #about .img,
          #about img,
          .hire-text h2 {
            position: relative;
          }

          /* Timeline background line */
          #about .img::before {
            content: "";
            left: 50%;
            width: 4px;
            position: absolute;
            height: calc(100% + 140px);
            background: var(--gray-color);
          }

        

          #cv img {
            width: 230px;
          }

          @media screen and (max-width: 990px) {
            #skills .card {
              width: calc(100% / 2 - 10px);
            }
          }

          @media screen and (max-width: 668px) {
            #skills .card,
            #portfolio .card-wrapper {
              width: 100%;
            }
          }
        `}
      </style>

      {/* HTML */}
      <section className="container py-5" id="cv">
        <div className="row">
          <div className="col-lg-4 mt-5 order-lg-0 order-1 text-center">
            <img className="img-fluid rounded-circle border border-5 border-dark-subtle" src={Profilepic} alt="profile-img" />
            <h2 className="mt-3">James Anderson</h2>
            <ul className="list-unstyled contact-info">
              
              <li>Logo Specialist and Graphic Designer</li>
              <li>United Kingdom  <span className='profile rating'> 4.8 </span> </li>
            </ul>
            
            <h5>Technical Skills</h5>
            <ul className="list-unstyled">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              {/* Add or remove skills as needed */}
            </ul>
            <h5>Personal Interests</h5>
            <ul className="list-unstyled">
              <li>Interest 1</li>
              <li>Interest 2</li>
              <li>Interest 3</li>
              {/* Add or remove interests as needed */}
            </ul>
          </div>
          <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
            <h3>Profile</h3>
            <hr />
            <p>Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences.</p>
            <h3>Highlights of Qualifications</h3>
            <hr />
            <ul>
              <li>Qualification 1</li>
              <li>Qualification 2</li>
              <li>Qualification 3</li>
              {/* Add or remove qualifications as needed */}
            </ul>
            <h3>Education</h3>
            <hr />
            <dl>
              <dt>Year - Year</dt>
              <dd>University/Institution</dd>
              <dd>Degree/Program</dd>
            </dl>
            <h3>Additional Courses & Training</h3>
            <hr />
            <dl>
              <dt>Year</dt>
              <dd>Course/Training</dd>
              <dd>Institution/Organization</dd>
            </dl>
            <h3>Work Experience</h3>
            <hr />
            <dl>
              <dt>Year - Year</dt>
              <dd>Job Position</dd>
              <dd>Company/Organization</dd>
              {/* Add or remove work experience entries as needed */}
            </dl>
            <h3>Extracurricular Activities</h3>
            <hr />
            <dl>
            <dt>Organization Name</dt>
            <dd>Role/Position</dd>
            <dd>Details of your involvement and contributions</dd>
            </dl>
            <h3>My Gig</h3>
            <hr />
            <dl>
              {/* gig gig gig gig                   
                            
                             
                              
                              
                              
                              
                              */}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default CVSection;
