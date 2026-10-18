import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

const navigate = useNavigate();

const btnClicked = () => {
    navigate('/contact')
    console.log('button clicked')
}

    return (
        <div>
<button onClick = {btnClicked} className='bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>   Return to Homepage 
    </button>  
         <h1>  About  </h1>
        </div>
    )
}
export default About
