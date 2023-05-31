import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// data
import { auth, googleAuth } from "../../configs/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistrationWithAuthPayload = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
        }
      );
    } catch (err) {
      console.log(err, "failed to create user - check code and logs");
    }
    const resetFormFields = () => {
      setEmail("");
      setPassword("");
    };
    resetFormFields();
  };

  const submitGoogleAuthSignUp = async (event) => {
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
      <h2>No account? Register now</h2>
      <form onSubmit={submitGoogleAuthSignUp}>
        <button type='submit'>Register with Google</button>
      </form>
      <h4>Or register with an email and password</h4>
      <form onSubmit={submitRegistrationWithAuthPayload}>
        <input
          type='email'
          placeholder='Register with an email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password must be a minimum of 8 characters'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit email & password registration</button>
      </form>
    </div>
  );
};

export default Register;
