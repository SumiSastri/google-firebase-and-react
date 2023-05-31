import React from "react";
import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className='App-header'>
      <nav>
        <h1>Google Cloud Services - Firebase authentication</h1>
        <Link to='/sign-in'>
          <button>Sign-In</button>
        </Link>
      </nav>
    </div>
  );
};
export default AuthNav;
