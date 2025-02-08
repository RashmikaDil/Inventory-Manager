import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "../Components/Home";
import Stock from "../Components/Stock";
import GR from "../Components/GR";
import Admin from "../Components/Admin";

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUser] = useState(null);  
  const [role, setRole] = useState(null); 
  const [tab, setTab] = useState(1);

  function navTab(num) {
    setTab(num);
  }
  

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const res = await axios.get("http://localhost:3000/pr", { withCredentials: true });
        console.log("Access Granted:", res.data);

       
        const [user, role] = res.data.split(",");
        setUser(user);
        setRole(role);
      } catch (err) {
        console.error("Access Denied:", err);
        navigate("/login");
      }
    };

    checkAccess();
  }, [navigate]);


  if (userData === null || role === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid h-auto grid-cols-5 bg-[#010409]">
        <div className="bg-[#010409] h-screen flex flex-col items-center">
          <h1 className="text-white text-3xl font-bold mb-10 mt-10">LOGO</h1>
          <h1 className="text-gray-500 text-2xl font-bold ">{userData}</h1>
          <h1 className="text-[#004fc5] text-sm ">
          
          {role < 2 && "Admin"}
          </h1>

    
          <div
            onClick={() => navTab(1)}
            className={`w-full h-auto cursor-pointer transition-all text-white p-5 text-sm hover:bg-[#004fc5] ${tab === 1 ? "bg-[#004fc5]" : ""}`}
          >
            Home
          </div>
          <div
            onClick={() => navTab(2)}
            className={`w-full h-auto cursor-pointer transition-all text-white p-5 text-sm hover:bg-[#004fc5] ${tab === 2 ? "bg-[#004fc5]" : ""}`}
          >
            Stock
          </div>
          <div
            onClick={() => navTab(3)}
            className={`w-full h-auto cursor-pointer transition-all text-white p-5 text-sm hover:bg-[#004fc5] ${tab === 3 ? "bg-[#004fc5]" : ""}`}
          >
            GR
          </div>
          <div
            onClick={() => navTab(4)}
            className={`w-full h-auto cursor-pointer transition-all text-white p-5 text-sm hover:bg-[#212830] ${role < 2 ? "block " : "hidden "} ${tab === 4 ? "bg-[#212830]" : ""}`}
          >
            Admin
          </div>
          <div className=" align-text-bottom text-amber-50">ss</div>
        </div>

        
        <div className="bg-[#0d1117] text-white col-span-4 p-4">
          {tab === 1 && <Home />}
          {tab === 2 && <Stock />}
          {(role === 1 || role === 1) && tab === 3 && <GR />}
          {tab === 4 && <Admin />}


          
        </div>

       
      </div>
    </>
  );
}

export default Dashboard;
