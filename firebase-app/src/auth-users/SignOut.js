import React from "react";
import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  // console.log(auth?.currentUser?.email, "current users email");
  const signOutAuthUser = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err, "failed logout user - check code, logs");
    }
  };

  return (
    <div>
      <form onSubmit={signOutAuthUser}>
        <p>Done? Miss you already :-) Come back soon!</p>
        <button type='submit'>Sign-Out</button>
      </form>
    </div>
  );
};

export default SignOut;
