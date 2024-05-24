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

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
     console.log("SavedData : " , savedData);
    return savedData ? JSON.parse(savedData) : initialFormData;
   
  });
  
  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitForm = async () => {
    try {
      // Retrieve formData and skills from local storage
      const formData = JSON.parse(localStorage.getItem("formData")); // formData is an object
      const skills = JSON.parse(localStorage.getItem("skills")); // skills is an array
      const combinedData = {
        ...formData, // Spread operator to include all formData properties
        skills: skills, // Add skills array
      };
      console.log("formDataCopy : ", combinedData);
      if (combinedData.image) {
        const imageFormData = new FormData();
        imageFormData.append("file", combinedData.image);
        imageFormData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset
        // Upload the image to Cloudinary
        const imageResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dcvk2iamg/image/upload",
          {
            method: "POST",
            body: imageFormData,
          }
        );
        console.log("imageFormData", imageFormData);
        const imageResult = await imageResponse.json();
        combinedData.image = imageResult.url; // Adjust based on your backend response
      }
      console.log("formDataCop : ", combinedData);
      const response = await fetch(
        "http://localhost:3306/register/seller",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(combinedData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Form submitted successfully:", data);
      // Clear form data from local storage after successful submission
      localStorage.removeItem("formData");
      localStorage.clear();
      setFormData(initialFormData); // Reset form data
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      );
    default:
      return <div>Error: Invalid step</div>;
  }
};

export default MultiStepForm;
