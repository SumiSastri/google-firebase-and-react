import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { auth, googleAuth } from "../../configs/firebase";

import Nav from "../../components/Nav";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitAuthSignIn = async (event) => {
    event.preventDefault();
    navigate("/blogs-admin");
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
    navigate("/blogs-admin");
    try {
      await signInWithRedirect(auth, googleAuth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Nav />

      <h3 className='App'>
        No account?
        <Link to='/register'>
          <h2>Register now</h2>
        </Link>
      </h3>
      <form className='App' onSubmit={submitGoogleSignIn}>
        <h3>Use Google to sign-in</h3>
        <button type='submit'>Sign-in with Google</button>
      </form>

      <form className='App' onSubmit={submitAuthSignIn}>
        <h3>Sign-in with email and password</h3>
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
        <br />
        <button type='submit'>Sign-in with email and password</button>
      </form>
    </div>
  );
};

export default SignIn;
