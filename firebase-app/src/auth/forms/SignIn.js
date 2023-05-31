import { useState } from "react";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

// data
import { auth, googleAuth } from "../../configs/firebase";
// components
import SignOut from "./SignOut";

const SignIn = () => {
  const navigate = useNavigate();
  // state management
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
    navigate("/add-blog");
  };

  const submitGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithRedirect(auth, googleAuth).then((userCredential) => {
        console.log(userCredential);
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/add-blog");
  };

  return (
    <div>
      <SignOut />
      <h3>Use Google to sign-in</h3>
      <form onSubmit={submitGoogleSignIn}>
        <button type='submit'>Sign-in with Google</button>
      </form>
      <h4>Sign-in with email and password</h4>
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
      <Link to='/register'>
        <h3>No account? Register now</h3>
      </Link>
    </div>
  );
};

export default SignIn;
