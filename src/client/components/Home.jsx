//socket io instructions for server and client: https://chatgpt.com/c/1d7dc091-ae1d-4606-9934-8db944f894a1


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {




  return (
    <div className="text-red-600">
      Home
      <Link to="/About">
        <button>About</button>
      </Link>

    </div>
  );
};

export default Home;
