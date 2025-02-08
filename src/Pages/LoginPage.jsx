import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Register from "../Components/Register";

function LoginPage () {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    email: "",
    password: "",
  
});

const [message,setMessage] = useState();
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/login",formData , { withCredentials: true });

        navigate('..');
    }catch(err){
        setError(err.message);
        console.error(err);
    }
}




    return (
        <>
        <div className="bg-[#0d1117] text-white h-screen flex justify-center items-center">
           
            <div className="w-auto h-auto p-10 bg-[#010409] border-1 border-[#212830] flex-col rounded-xl  flex justify-center items-center">
                <div className="text-white text-4xl font-bold">LOGO</div>
        <form onSubmit={handleSubmit}
                className="flex flex-col m-5 justify-center items-center">
                 <input 
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="m-2 w-68 p-2 rounded-sm bg-[#212830] mb-4"
                ></input>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                     className="m-2 w-68 p-2 rounded-sm bg-[#212830] mb-4"
                ></input>
    <button className="p-2 bg-[#004fc5] w-68 rounded-sm">Login</button>
            </form>

            </div>

        </div>
        
        
        </>
    )

}
export default LoginPage;   