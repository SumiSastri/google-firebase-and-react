import React from "react";
import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const signOutAuthUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err, "failed logout user - check code, logs");
    }
  };
  // console.log(auth?.currentUser?.email, "current users email");
  return (
    <div>
      <form>
        <p>Done? Miss you already :-) Come back soon!</p>
        <button onClick={signOutAuthUser}>Sign-Out</button>
      </form>
    </div>
  );
};

export default SignOut;
