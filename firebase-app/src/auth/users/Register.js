import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// data
import { auth } from "../../configs/firebase";

const Register = () => {
  const navigate = useNavigate();
  // state management
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
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={submitRegistrationWithAuthPayload}>
        <h2>Register</h2>
        <input
          type='email'
          placeholder='Register with a valid email'
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