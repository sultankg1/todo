import React from "react";
import {useNavigate} from "react-router-dom";

const Input = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{color:"blue"}}>Please Loging</h1>
            <button onClick={()=>navigate(-1)}>Go Back Home</button>
        </div>
    )
};

export default Input;