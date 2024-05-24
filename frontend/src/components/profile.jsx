
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import Profilepic from '../assets/images/profile/profile-img.jpg';

// const CVSection = () => {
//   return (
//     <>
//       <style>
//         {`
//           h3, h5 {
//             font-weight: bold;
//           }

//           .editp {
//             background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
//           }

//           .sidec {
//             align-items: center;
//             justify-content: center;
//             width: 300px;
//             height: auto;
//             border-radius: 4px;
//             background-color: transparent;
//             text-align: center;
//             margin: 20px;
//             padding: 20px;
//             transition: .3s;
//             box-shadow: 1px 10px 15px 8px rgba(0,0,0,0.6);
//           }

//           :root {
//             --white-color: #fff;
//             --bg-color: #fff;
//             --gray-color: #ccc;
//           }

//           body {
//             background: var(--bg-color) !important;
//           }

//           .nav-item .nav-link {
//             color: var(--white-color);
//           }

//           #skills i {
//             height: 100px;
//             width: 100px;
//           }

//           #about .img,
//           #about img,
//           .hire-text h2 {
//             position: relative;
//           }

//           #about .img::before {
//             content: "";
//             left: 50%;
//             width: 4px;
//             position: absolute;
//             height: calc(100% + 140px);
//             background: var(--gray-color);
//           }

//           #cv img {
//             width: 230px;
//           }

//           @media screen and (max-width: 990px) {
//             #skills .card {
//               width: calc(100% / 2 - 10px);
//             }
//           }

//           @media screen and (max-width: 668px) {
//             #skills .card,
//             #portfolio .card-wrapper {
//               width: 100%;
//             }
//           }

//           .no-border {
//             border: none;
//           }
//         `}
//       </style>

//       <div className='editp'>
//         <section className="container py-5" id="cv">
//           <div className="row">
//             <div className="sidec col-lg-4 mt-5 order-lg-0 order-1 text-center">
//               <img className="img-fluid rounded-circle border border-5 border-dark-subtle" src={Profilepic} alt="profile-img" />
//               <h2 className="mt-3">Akash Hirumal</h2>
//               <ul className="list-unstyled contact-info">
//                 <li>Logo Specialist and Graphic Designer</li>
//                 <li>United Kingdom <span className='profile rating'> 4.8 </span></li>
//               </ul>
//               <h5>Technical Skills</h5>
//               <ul className="list-unstyled">
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>JavaScript</li>
//               </ul>
//               <h5>Personal Interests</h5>
//               <ul className="list-unstyled">
//                 <li>Interest 1</li>
//                 <li>Interest 2</li>
//                 <li>Interest 3</li>
//               </ul>
//             </div>
//             <div className="col-lg-7 order-lg-1 order-0 mt-5 m-3 text-start">
//               <h3>Profile</h3>
//               <hr />
//               <p>Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences.</p>
//               <h3>Highlights of Qualifications</h3>
//               <hr />
//               <ul>
//                 <li>Qualification 1</li>
//                 <li>Qualification 2</li>
//                 <li>Qualification 3</li>
//               </ul>
//               <h3>Education</h3>
//               <hr />
//               <dl>
//                 <dt>Year - Year</dt>
//                 <dd>University/Institution</dd>
//                 <dd>Degree/Program</dd>
//               </dl>
//               <h3>Additional Courses & Training</h3>
//               <hr />
//               <dl>
//                 <dt>Year</dt>
//                 <dd>Course/Training</dd>
//                 <dd>Institution/Organization</dd>
//               </dl>
//               <h3>Work Experience</h3>
//               <hr />
//               <dl>
//                 <dt>Year - Year</dt>
//                 <dd>Job Position</dd>
//                 <dd>Company/Organization</dd>
//               </dl>
//               <h3>Extracurricular Activities</h3>
//               <hr />
//               <dl>
//                 <dt>Organization Name</dt>
//                 <dd>Role/Position</dd>
//                 <dd>Details of your involvement and contributions</dd>
//               </dl>
//               <h3>My Gig</h3>
//               <hr />
//               <dl>
//                 {/* gig gig gig gig */}
//               </dl>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default CVSection;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Profilepic from '../assets/images/profile/profile-img.jpg';

const CVSection = () => {
  // Define constant arrays for different sections
  const technicalSkills = ['HTML', 'CSS', 'JavaScript'];
  const personalInterests = ['Interest 1', 'Interest 2', 'Interest 3'];
  const qualifications = ['Qualification 1', 'Qualification 2', 'Qualification 3'];
  const education = [
    { year: 'Year - Year', institution: 'University/Institution', degree: 'Degree/Program' }
  ];
  const courses = [
    { year: 'Year', course: 'Course/Training', institution: 'Institution/Organization' }
  ];
  const workExperience = [
    { year: 'Year - Year', position: 'Job Position', company: 'Company/Organization' }
  ];
  const extracurricularActivities = [
    { organization: 'Organization Name', role: 'Role/Position', details: 'Details of your involvement and contributions' }
  ];

  return (
    <>
      <style>
        {`
          h3, h5 {
            font-weight: bold;
          }

          .editp {
            background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
          }

          .sidec {
            align-items: center;
            justify-content: center;
            width: 300px;
            height: auto;
            border-radius: 4px;
            background-color: transparent;
            text-align: center;
            margin: 20px;
            padding: 20px;
            transition: .3s;
            box-shadow: 1px 10px 15px 8px rgba(0,0,0,0.6);
          }

          :root {
            --white-color: #fff;
            --bg-color: #fff;
            --gray-color: #ccc;
          }

          body {
            background: var(--bg-color) !important;
          }

          .nav-item .nav-link {
            color: var(--white-color);
          }

          #skills i {
            height: 100px;
            width: 100px;
          }

          #about .img,
          #about img,
          .hire-text h2 {
            position: relative;
          }

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

          .no-border {
            border: none;
          }
        `}
      </style>

      <div className='editp'>
        <section className="container py-5" id="cv">
          <div className="row">
            <div className="sidec col-lg-4 mt-5 order-lg-0 order-1 text-center">
              <img className="img-fluid rounded-circle border border-5 border-dark-subtle" src={Profilepic} alt="profile-img" />
              <h2 className="mt-3">Akash Hirumal</h2>
              <ul className="list-unstyled contact-info">
                <li>Logo Specialist and Graphic Designer</li>
                <li>United Kingdom <span className='profile rating'> 4.8 </span></li>
              </ul>
              <h5>Technical Skills</h5>
              <ul className="list-unstyled">
                {technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h5>Personal Interests</h5>
              <ul className="list-unstyled">
                {personalInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7 order-lg-1 order-0 mt-5 m-3 text-start">
              <h3>Profile</h3>
              <hr />
              <p>Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences.</p>
              <h3>Highlights of Qualifications</h3>
              <hr />
              <ul>
                {qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
              <h3>Education</h3>
              <hr />
              <dl>
                {education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <dt>{edu.year}</dt>
                    <dd>{edu.institution}</dd>
                    <dd>{edu.degree}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <h3>Additional Courses & Training</h3>
              <hr />
              <dl>
                {courses.map((course, index) => (
                  <React.Fragment key={index}>
                    <dt>{course.year}</dt>
                    <dd>{course.course}</dd>
                    <dd>{course.institution}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <h3>Work Experience</h3>
              <hr />
              <dl>
                {workExperience.map((work, index) => (
                  <React.Fragment key={index}>
                    <dt>{work.year}</dt>
                    <dd>{work.position}</dd>
                    <dd>{work.company}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <h3>Extracurricular Activities</h3>
              <hr />
              <dl>
                {extracurricularActivities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <dt>{activity.organization}</dt>
                    <dd>{activity.role}</dd>
                    <dd>{activity.details}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <h3>My Gig</h3>
              <hr />
              <dl>
                {/* Add your gigs here */}
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CVSection;

