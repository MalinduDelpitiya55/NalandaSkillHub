import PropTypes from "prop-types";
import DefaultPP from "../../assets/images/profile-circle.svg";
import Tagify from "../test";
const Step2 = ({formData, setFormData, submitForm, prevStep}) => {
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({...formData, image: file});

      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({...prevData, imagePreview: reader.result}));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({...formData, [e.target.name]: e.target.value});
    }
  };

  return (
    <div className="row -5 p-5" style={{backgroundColor: "#ecf8ff"}}>
      <div className="col-lg-6 col-xl-6 p-5" id="Signin-Background"></div>
      <div className="col-lg-6 col-xl-6 col-md-12">
        <div className="card p-4" style={{backgroundColor: "#ecf8ff"}}>
          <div>
            <h2>Step 2</h2>
            <table className="mx-5">
              <tbody>
                <tr>
                  <td className="col">Profile Picture</td>
                  <td className="text-center col-6 align-items-center">
                    <div className="profile-picture">
                      {formData.imagePreview || formData.image ? (
                        <div>
                          <img
                            src={formData.imagePreview}
                            alt="Uploaded"
                            style={{
                              borderRadius: "70%",
                              width: "150px",
                              height: "150px",
                            }}
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src={DefaultPP}
                            alt="Default"
                            style={{
                              borderRadius: "70%",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input form-control"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        accept="image/*"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="mx-5 mt-5">
              <tbody>
                <tr className="col-7">
                  <td className="col-1">
                    <label htmlFor="uname">User Name:</label>
                  </td>
                  <td className="col-3 px-4">
                    <input
                      type="text"
                      id="uname"
                      name="uname"
                      className="form-control col-2"
                      value={formData.uname}
                      onChange={handleChange}
                      placeholder="User Name"
                    />
                  </td>
                </tr>
                <tr className="col-7">
                  <td className="col-1">
                    <label htmlFor="description" className="mt-5">
                      Description:
                    </label>
                  </td>
                  <td className="col-6 px-4">
                    <textarea
                      id="description"
                      name="description"
                      className="form-control mt-5"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className="col-8">
                  <td className="col-1 align-items-start">
                    <label htmlFor="Tagify" className="mt-5">
                      Add your Skills:
                    </label>
                  </td>
                  <td className="col-4">
                    <Tagify />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex flex-row mt-5">
              <div className="col">
                <div className="mx-3">
                  <button className="btn btn-primary px-5" onClick={prevStep}>
                    Previous
                  </button>
                </div>
              </div>
              <div className="col"></div>
              <div className="col">
                <div className="mx-5">
                  <button className="btn btn-primary px-5" onClick={submitForm}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Step2.propTypes = {
  formData: PropTypes.shape({
    uname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object,
    imagePreview: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Step2;

