import { React, useState } from "react";
import { auth, googleAuth } from "../configs/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email, "current user email");

  const submitAuthSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error, "failed to sign in - check credentials");
    }
  };

  console.log(submitAuthSignIn, "signIn payload");

  const submitGoogleAuthSignUp = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(submitGoogleAuthSignUp, "google auth signIn payload");
  return (
    <div>
      <p>Already have an account?</p>
      <form onSubmit={submitGoogleAuthSignUp}>
        <button type='submit'>Sign in with Google</button>
      </form>
      <h5>Or sign-in with your email and password</h5>
      <form onSubmit={submitAuthSignIn}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
