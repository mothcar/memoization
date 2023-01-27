import React, { useState } from "react";
import { Navigate } from "react-router";

function Home () {
  const [goToAbout, setGoToAbout] = useState(false);

  if (goToAbout) {
    return <Navigate to="/about" />;
  }

  return (
    <>
      <div>Home</div>
      <div>
        <button onClick={() => setGoToAbout(true)}>About</button>
      </div>
    </>
  );
};

export default Home;
