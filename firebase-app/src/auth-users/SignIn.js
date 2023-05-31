import { useState } from "react";
import { auth, googleAuth } from "../configs/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import SignOut from "./SignOut";
import Register from "./Register";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitAuthSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
        }
      );
    } catch (error) {
      console.log(error, "failed to sign in - check credentials");
    }
    const resetFormFields = () => {
      setEmail("");
      setPassword("");
    };
    resetFormFields();
  };

  const submitGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleAuth).then((userCredential) => {
        console.log(userCredential);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <SignOut />
      <h3>Use Google to sign-in</h3>
      <form onSubmit={submitGoogleSignIn}>
        <button type='submit'>Sign-in with Google</button>
      </form>
      <h4>Or sign-in with email and password</h4>
      <form onSubmit={submitAuthSignIn}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign-in with email and password</button>
      </form>
      <Register />
    </div>
  );
};

export default SignIn;
