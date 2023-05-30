import { React, useState } from "react";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistrationWithAuthPayload = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    // FIXME: local test, REMOVE
    console.log(createUserWithEmailAndPassword, "test RegistrationPayload");
  };

  return (
    <div>
      <p>Not yet a user?</p>
      <h5>Register</h5>
      <form onSubmit={submitRegistrationWithAuthPayload}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
