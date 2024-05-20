import React, {Component} from "react";
import "./css/signin-seller.css";

class InputSkill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      newSkill: "", // New skill input
    };
    this.inputRef = React.createRef();
  }
  

  // remove skill
  removeSkill = (i) => {
    const skills = this.state.skills;
    skills.splice(i, 1);
    this.setState({
      skills: skills,
    });
  };

  // add skill
  addSkill = (e) => {
    const skills = this.state.skills;
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      // check if duplicate skill
      if (skills.find((skill) => skill.toLowerCase() === value.toLowerCase())) {
        return alert("No duplicate value allowed");
      }
      // else add skill to skills array
      skills.push(value);
      // set new state
      this.setState({
        skills,
        newSkill: "", // Clear the input field
      });
    } else if (e.key === "Backspace" && !value) {
      // if no value and hit backspace, remove previous skill
      this.removeSkill(skills.length - 1);
    }
  };

  // handle input change
  handleInputChange = (e) => {
    this.setState({
      newSkill: e.target.value,
    });
  };

  render() {
    const {skills, newSkill} = this.state;
    return (
      <>
        <div className="skill ">
          <ul>
            <div className="input-skill ">
              <div className="d-flex flex-row">
                
                <div className="col-6">
                  <input
                    onKeyDown={this.addSkill}
                    type="text"
                    size="4"
                    className="input5 form-control mt-5"
                    ref={this.inputRef}
                    value={newSkill} // Bind input value
                    onChange={this.handleInputChange} // Handle input change
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
             
              <div className="">
                {skills.map((skill, i) => {
                  return (
                    <div className="btn bg-info-subtle rounded-5 mt-4" key={i}>
                      {skill}
                      <button
                        className="btn"
                        onClick={() => this.removeSkill(i)}
                      >
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default InputSkill;
