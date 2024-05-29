import  {useState, useEffect} from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    dob: "",
    password: "",
    confirmPassword: "",
    country: "",
    gender: "",
    timezone: "",
    uname: "",
    description: "",
    image: null,
    imagePreview: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitForm = async () => {
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, key)) {
          formDataToSend.append(key, formData[key]);
        }
      }
      const response = await fetch("http://localhost:3306/register/seller", {
        method: "POST",
        body: formDataToSend,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Form submitted successfully:", data);
      localStorage.removeItem("formData");
      localStorage.removeItem("skills");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
    </>
  );
};

export default MultiStepForm;
