import { React, useState } from "react";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistrationWithAuthPayload = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err, "failed to create user - check code and logs");
    }
  };
  console.log(submitRegistrationWithAuthPayload, "reg payload");
  return (
    <div>
      <h5>Register</h5>
      <form onSubmit={submitRegistrationWithAuthPayload}>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
