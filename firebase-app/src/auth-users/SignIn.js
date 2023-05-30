import { React, useState } from "react";
import { auth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// components
import Register from "./Register";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.email, "current user email");

  const submitAuthSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error, "failed to sign in - check credentials");
    }
  };

  return (
    <div>
      <p>Already have an account?</p>
      <h5>Sign-In</h5>
      <form onSubmit={submitAuthSignIn}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
        <p>Not yet a user?</p>
        <button type='button'>Register</button>
      </form>
      <section>
        <Register />
      </section>
    </div>
  );
};

export default SignIn;
