import React from "react";
import { useNavigate } from "react-router-dom";

function About ()  {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          go Home
        </button>
      </div>
      <div>About</div>
    </>
  );
};

export default About;
