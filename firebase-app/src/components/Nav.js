import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='App-header'>
      <nav>
        <h1>Google Cloud Services - Firebase authentication</h1>
        <Link to='/sign-in'>
          <h2>Sign-In</h2>
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
