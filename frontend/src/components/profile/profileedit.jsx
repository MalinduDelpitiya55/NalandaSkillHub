import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profilepic from "../../assets/images/profile/profile-img.jpg";
import "./../css/profile.css";
import Tagify from "../ragistration/skillsInputForRegister";
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

  return (
    <>
      {/* CSS */}
      <style>
        {`
        
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
        `}
      </style>

      <div className="editp">
        <section className="container" id="cv">
          <div className="row">
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
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="col-12"
                  onChange={handleChange}
                  placeholder="Logo Specialist and Graphic Designer"
                />
              </ul>

              <h5>Technical Skills</h5>
              <ul className="list-unstyled">
                <Tagify />
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
              </ul>
            </div>
            <div className="col-lg-7 order-lg-1 order-0 mt-5 text-start">
              <h3>Profile</h3>
              <hr />
              <textarea
                className="descriptionp form-control"
                id="description"
                name="description"
                rows="5"
                onChange={handleChange}
                placeholder="Write a brief description of yourself, your background, and your goals. Highlight your key strengths and experiences."
              />
              <br />
              <h3>Highlights of Qualifications</h3>
              <hr />
              <ul>
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
              </ul>
              <h3>Education</h3>
              <hr />
              <dl>
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
              </dl>
              <h3>Additional Courses & Training</h3>
              <hr />
              <dl>
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
              </dl>
              <h3>Work Experience</h3>
              <hr />
              <dl>
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
              </dl>
              <h3>Extracurricular Activities</h3>
              <hr />
              <dl>
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
        </section>
      </div>
    </>
  );
};

export default CVSection;
