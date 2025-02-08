import axios from "axios";
import { useState, useEffect } from "react";
import Register from "./Register";

function Admin() {
    const [AdminMsg, setAdmin] = useState("");

    useEffect(() => {
        const adminOnly = async () => {
            try {
                const response = await axios.get("http://localhost:3000/adminOnly", {
                    withCredentials: true, 
                });
                setAdmin("You are an Admin");
            } catch (err) {
                console.error(err);
                setAdmin("Access Denied");
            }
        };

        adminOnly();
    }, []); 

    return (<>
    <div className="p-5">

    <Register></Register>

    </div>
    
    
    
   </>)
    
}

export default Admin;
