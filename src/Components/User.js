import React from "react";
import {useNavigate} from "react-router-dom";

const User = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{color:"grey"}}>User Information</h1>
            <button onClick={()=>navigate(-1)}>Go Back Home</button>
        </div>
    )
};

export default User;