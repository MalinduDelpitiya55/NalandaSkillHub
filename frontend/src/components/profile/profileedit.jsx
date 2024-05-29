<<<<<<< HEAD
//import React from 'react';
=======
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profilepic from "../../assets/images/profile/profile-img.jpg";
import "./../css/profile.css";
import Tagify from "../ragistration/skillsInputForRegister";
<<<<<<< HEAD

const CVSection = () => {
=======
import {useState, useEffect} from "react";
import Axios from "axios";

const CVSection = () => {
  const [formData, setFormData] = useState({
    
    name: "",
    description: "",
    interests: ["", "", ""],
    qualifications: ["", "", ""],
    education: [
      {year: "", institution: "", degree: ""},
      {year: "", institution: "", degree: ""},
    ],
    courses: [
      {year: "", name: "", institution: ""},
      {year: "", name: "", institution: ""},
    ],
    experiences: [
      {year: "", position: "", organization: ""},
      {year: "", position: "", organization: ""},
    ],
    extracurriculars: [
      {organization: "", role: "", details: ""},
      {organization: "", role: "", details: ""},
    ],
    skills: [],
  });

  useEffect(() => {
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        skills: JSON.parse(storedSkills),
      }));
    }
    const userId = localStorage.getItem("id");
    if (userId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: userId,
      }));
    }
  }, []);
 
  const handleSubmit = async () => {
    console.log(formData);
    try {
      // Get the JWT token from wherever it's stored in your frontend
      const id = localStorage.getItem("userID");
    

      const response = await Axios.post(
        `http://localhost:3306/seller/update/${id}`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    const [key, index, subkey] = name.split("-");

    if (index !== undefined) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: prevFormData[key].map((item, i) =>
          i === parseInt(index, 10)
            ? subkey
              ? {...item, [subkey]: value}
              : value
            : item
        ),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
  return (
    <>
      {/* CSS */}
      <style>
        {`
<<<<<<< HEAD

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
      
           
=======
        .editp {
          background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        }
        input, textarea {
          border: none;
          outline: none;
          font-size: 16px;
          background-color: #f0f0f0;
          color: #333;
          padding: 15px 25px;
          margin: 8px 8px;
        }
        .year {
          width: 150px;
        }
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
        `}
      </style>

      <div className="editp">
        <section className="container" id="cv">
<<<<<<< HEAD
          <div className=" row">
=======
          <div className="row">
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
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
<<<<<<< HEAD
                {/* <li id='role'>Logo Specialist and Graphic Designer</li> */}
=======
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="col-12"
<<<<<<< HEAD
=======
                  onChange={handleChange}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
                  placeholder="Logo Specialist and Graphic Designer"
                />
              </ul>

              <h5>Technical Skills</h5>
              <ul className="list-unstyled">
                <Tagify />
<<<<<<< HEAD
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
=======
              </ul>
              <h5>Personal Interests</h5>
              <ul className="list-unstyled">
                {formData.interests.map((interest, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`interests-${index}`}
                    name={`interests-${index}`}
                    className="interests col-12"
                    placeholder={`Interests ${index + 1}`}
                    onChange={handleChange}
                    required
                  />
                ))}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              </ul>
            </div>
            <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
              <h3>Profile</h3>
              <hr />
<<<<<<< HEAD
              {/* <p>Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences.</p> */}
=======
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              <textarea
                className="descriptionp form-control"
                id="description"
                name="description"
                rows="5"
<<<<<<< HEAD
=======
                onChange={handleChange}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
                placeholder="Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences."
              />
              <br />
              <h3>Highlights of Qualifications</h3>
              <hr />
              <ul>
<<<<<<< HEAD
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
=======
                {formData.qualifications.map((qualification, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`qualifications-${index}`}
                    name={`qualifications-${index}`}
                    className="qualification col-12"
                    onChange={handleChange}
                    placeholder={`Qualification ${index + 1}`}
                    required
                  />
                ))}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              </ul>
              <h3>Education</h3>
              <hr />
              <dl>
<<<<<<< HEAD
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
=======
                {formData.education.map((edu, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      id={`education-${index}-year`}
                      name={`education-${index}-year`}
                      className="year col-12"
                      onChange={handleChange}
                      placeholder="Year - Year"
                      required
                    />
                    <input
                      type="text"
                      id={`education-${index}-institution`}
                      name={`education-${index}-institution`}
                      className="education col-12"
                      onChange={handleChange}
                      placeholder="University/Institution"
                      required
                    />
                    <input
                      type="text"
                      id={`education-${index}-degree`}
                      name={`education-${index}-degree`}
                      className="education col-12"
                      onChange={handleChange}
                      placeholder="Degree/Program"
                    />
                  </div>
                ))}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              </dl>
              <h3>Additional Courses & Training</h3>
              <hr />
              <dl>
<<<<<<< HEAD
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
=======
                {formData.courses.map((course, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      id={`courses-${index}-year`}
                      name={`courses-${index}-year`}
                      className="year col-12"
                      onChange={handleChange}
                      placeholder="Year"
                      required
                    />
                    <input
                      type="text"
                      id={`courses-${index}-name`}
                      name={`courses-${index}-name`}
                      className="courses col-12"
                      placeholder="Course/Training"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      id={`courses-${index}-institution`}
                      name={`courses-${index}-institution`}
                      className="courses col-12"
                      onChange={handleChange}
                      placeholder="Institution/Organization"
                    />
                  </div>
                ))}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              </dl>
              <h3>Work Experience</h3>
              <hr />
              <dl>
<<<<<<< HEAD
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
=======
                {formData.experiences.map((experience, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      id={`experiences-${index}-year`}
                      name={`experiences-${index}-year`}
                      className="year col-12"
                      onChange={handleChange}
                      placeholder="Year"
                    />
                    <input
                      type="text"
                      id={`experiences-${index}-position`}
                      name={`experiences-${index}-position`}
                      className="experience col-12"
                      onChange={handleChange}
                      placeholder="Position"
                    />
                    <input
                      type="text"
                      id={`experiences-${index}-organization`}
                      name={`experiences-${index}-organization`}
                      className="experience col-12"
                      onChange={handleChange}
                      placeholder="Organization"
                    />
                  </div>
                ))}
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
              </dl>
              <h3>Extracurricular Activities</h3>
              <hr />
              <dl>
<<<<<<< HEAD
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
=======
                {formData.extracurriculars.map((activity, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      id={`extracurriculars-${index}-organization`}
                      name={`extracurriculars-${index}-organization`}
                      className="organization col-12"
                      onChange={handleChange}
                      placeholder="Organization Name"
                    />
                    <input
                      type="text"
                      id={`extracurriculars-${index}-role`}
                      name={`extracurriculars-${index}-role`}
                      className="extracurricular col-12"
                      onChange={handleChange}
                      placeholder="Role/Position"
                    />
                    <input
                      type="text"
                      id={`extracurriculars-${index}-details`}
                      name={`extracurriculars-${index}-details`}
                      className="extracurricular col-12"
                      onChange={handleChange}
                      placeholder="Details"
                    />
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              id="formsubmit"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
>>>>>>> 342d9ae853afea29d5efa953e184211116e2b06b
        </section>
      </div>
    </>
  );
};

export default CVSection;
