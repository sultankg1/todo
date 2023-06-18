import React from "react";
import{useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
 
    return (
        <div>
            <h1 style={{color:"green"}}>IT CLUB</h1>
            <button onClick={()=>navigate("/about")}>About</button>
            <button onClick={()=>navigate("/user")}>User</button>
            <button onClick={()=>navigate("/input")}>Input</button>
        </div>
    )
}

export default Home;
