// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import axios from "axios";

export default function BuyersRegistration() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(value)
      const res = await axios.post("http://localhost:5000/create", value);
      console.log(res);
      if (res.status === 201) {
        alert("Account created successfully");
      }
    } catch (error) {
      console.error("Error during registration ", error);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          onChange={handleChange}
          value={value.name}
          name="name"
          required
        />
        <input
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={value.email}
          name="email"
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={value.password}
          onChange={handleChange}
          name="password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
