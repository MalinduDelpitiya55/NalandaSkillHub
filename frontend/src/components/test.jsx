import  {useState, useRef, useEffect} from "react";

const InputSkill = () => {
  const [skills, setSkills] = useState(() => {
    // Initialize state from localStorage if available
    const savedSkills = localStorage.getItem("skills");
    return savedSkills ? JSON.parse(savedSkills) : [];
  });
  const [newSkill, setNewSkill] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    // Update local storage whenever skills change
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const addSkill = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      if (skills.find((skill) => skill.toLowerCase() === value.toLowerCase())) {
        alert("No duplicate value allowed");
      } else {
        const updatedSkills = [...skills, value];
        setSkills(updatedSkills);
        setNewSkill("");
      }
    } else if (e.key === "Backspace" && !value) {
      removeSkill(skills.length - 1);
    }
  };

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  return (
    <div className="skill">
      <ul>
        <div className="input-skill">
          <div className="d-flex flex-row">
            <div className="col-6">
              <input
                onKeyDown={addSkill}
                type="text"
                size="4"
                className="form-control mt-5"
                ref={inputRef}
                value={newSkill}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div>
            {skills.map((skill, i) => (
              <div className="btn bg-info-subtle rounded-5 mt-4" key={i}>
                {skill}
                <button className="btn" onClick={() => removeSkill(i)}>
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default InputSkill;
