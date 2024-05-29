//import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profilepic from "../../assets/images/profile/profile-img.jpg";
import "./../css/profile.css";
import Tagify from "../ragistration/skillsInputForRegister";

const CVSection = () => {
  return (
    <>
      {/* CSS */}
      <style>
        {`

        .editp{
          background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        }

        input {
          border: none;
          outline: none;
          font-size: 16px;
          background-color: #f0f0f0; /* Optional: Light grey background */
          color: #333; /* Optional: Text color */
          padding: 15px 25px;
          margin: 8px 8px;
      }

      .descriptionp{
          font-size: 16px;
          background-color: #f0f0f0; /* Optional: Light grey background */
          color: #333; /* Optional: Text color */
          margin: 8px 8px;
      }

      .year{
        width: 150px;
      }
      
           
        `}
      </style>

      <div className="editp">
        <section className="container" id="cv">
          <div className=" row">
            <div className="col-lg-4 mt-5 order-lg-0 order-1 text-center">
              <img
                className="img-fluid rounded-circle border border-5 border-dark-subtle"
                src={Profilepic}
                alt="profile-img"
              />
              <h2 className="mt-3" id="name">
                Akash Hirumal
              </h2>
              <ul className="list-unstyled contact-info">
                {/* <li id='role'>Logo Specialist and Graphic Designer</li> */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="col-12"
                  placeholder="Logo Specialist and Graphic Designer"
                />
              </ul>

              <h5>Technical Skills</h5>
              <ul className="list-unstyled">
                <Tagify />
                {/* <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> */}
                {/* Add or remove skills as needed */}
              </ul>
              <h5>Personal Interests</h5>
              <ul className="list-unstyled">
                <input
                  type="text"
                  id="interests1"
                  name="interests1"
                  className="interests col-12"
                  placeholder="Interests 1"
                  required
                />
                <input
                  type="text"
                  id="interests2"
                  name="interests2"
                  className="interests col-12"
                  placeholder="Interests 2"
                  required
                />
                <input
                  type="text"
                  id="interests3"
                  name="interests3"
                  className="interests col-12"
                  placeholder="Interests 3"
                />
                {/* <li>Interest 1</li>
              <li>Interest 2</li>
              <li>Interest 3</li> */}
                {/* Add or remove interests as needed */}
              </ul>
            </div>
            <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
              <h3>Profile</h3>
              <hr />
              {/* <p>Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences.</p> */}
              <textarea
                className="descriptionp form-control"
                id="description"
                name="description"
                rows="5"
                placeholder="Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences."
              />
              <br />
              <h3>Highlights of Qualifications</h3>
              <hr />
              <ul>
                <input
                  type="text"
                  id="qualification1"
                  name="qualification1"
                  className="qualification col-12"
                  placeholder="Qualification 1"
                  required
                />
                <input
                  type="text"
                  id="qualification2"
                  name="qualification2"
                  className="qualification col-12"
                  placeholder="Qualification 2"
                  required
                />
                <input
                  type="text"
                  id="qualification3"
                  name="qualification3"
                  className="qualification col-12"
                  placeholder="Qualification 3"
                />

                {/* <li>Qualification 1</li>
              <li>Qualification 2</li>
              <li>Qualification 3</li> */}
                {/* Add or remove qualifications as needed */}
              </ul>
              <h3>Education</h3>
              <hr />
              <dl>
                <input
                  type="text"
                  id="year1"
                  name="year1"
                  className="year col-12"
                  placeholder="Year - Year"
                  required
                />
                <input
                  type="text"
                  id="education1"
                  name="education1"
                  className="education col-12"
                  placeholder="University/Institution"
                  required
                />
                <input
                  type="text"
                  id="education2"
                  name="education2"
                  className="education col-12"
                  placeholder="Degree/Program"
                />
                <input
                  type="text"
                  id="education3"
                  name="education3"
                  className="education col-12"
                  placeholder="Education 3"
                />
                <input
                  type="text"
                  id="education4"
                  name="education4"
                  className="education col-12"
                  placeholder="Education 4"
                />

                {/* <dt>Year - Year</dt>
              <dd>University/Institution</dd>
              <dd>Degree/Program</dd> */}
              </dl>
              <h3>Additional Courses & Training</h3>
              <hr />
              <dl>
                <input
                  type="text"
                  id="year2"
                  name="year2"
                  className="year col-12"
                  placeholder="Year - Year"
                  required
                />
                <input
                  type="text"
                  id="courses1"
                  name="courses1"
                  className="courses col-12"
                  placeholder="Course/Training"
                  required
                />
                <input
                  type="text"
                  id="courses2"
                  name="courses2"
                  className="courses col-12"
                  placeholder="Institution/Organization"
                />
                <input
                  type="text"
                  id="courses3"
                  name="courses3"
                  className="courses col-12"
                  placeholder="Courses 3"
                />
                <input
                  type="text"
                  id="courses4"
                  name="courses4"
                  className="courses col-12"
                  placeholder="Courses 4"
                />
                {/* <dt>Year</dt>
              <dd>Course/Training</dd>
              <dd>Institution/Organization</dd> */}
              </dl>
              <h3>Work Experience</h3>
              <hr />
              <dl>
                <input
                  type="text"
                  id="year3"
                  name="year3"
                  className="year col-12"
                  placeholder="Year - Year"
                />
                <input
                  type="text"
                  id="experience1"
                  name="experience1"
                  className="experience col-12"
                  placeholder="Experience 1"
                />
                <input
                  type="text"
                  id="experience2"
                  name="experience2"
                  className="experience col-12"
                  placeholder="Experience 2"
                />
                <input
                  type="text"
                  id="experience3"
                  name="experience3"
                  className="experience col-12"
                  placeholder="Experience 3"
                />
                {/* <dt>Year - Year</dt>
              <dd>Job Position</dd>
              <dd>Company/Organization</dd> */}
                {/* Add or remove work experience entries as needed */}
              </dl>
              <h3>Extracurricular Activities</h3>
              <hr />
              <dl>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="organization col-12"
                  placeholder="Organization Name"
                />
                <input
                  type="text"
                  id="organization1"
                  name="organization1"
                  className="organization col-12"
                  placeholder="Role/Position"
                />
                <input
                  type="text"
                  id="organization2"
                  name="organization2"
                  className="organization col-12"
                  placeholder="Details of your involvement and contributions"
                />
                <input
                  type="text"
                  id="organization3"
                  name="organization3"
                  className="organization col-12"
                  placeholder="Details of your involvement and contributions"
                />
                {/* <dt>Organization Name</dt>
            <dd>Role/Position</dd>
            <dd>Details of your involvement and contributions</dd> */}
              </dl>
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-secondary  w-25 mx-2"
                  data-mdb-ripple-init
                  data-mdb-ripple-color="dark"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-rounded w-25 "
                  data-mdb-ripple-init
                >
                  Save
                </button>
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CVSection;
