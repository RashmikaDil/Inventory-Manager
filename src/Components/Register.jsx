import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role : ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[#e2e2e2] text-xl mb-5">Register New User</h2>
      {message && <p className="">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="username" 
          placeholder="Username"
          className="bg-[#212830] m-2 p-2 w-128 rounded-xl"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-[#212830] m-2 p-2 w-128 rounded-xl"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-[#212830] m-2 p-2 w-128 rounded-xl"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="dropdown"
          name="role"  
          placeholder="Role Code"
         className="bg-[#212830] m-2 p-2 w-128 rounded-xl"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <button className="bg-[#004fc5] m-2 p-2 w-128 cursor-pointer rounded-xl">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
