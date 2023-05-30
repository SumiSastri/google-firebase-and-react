import { React, useState } from "react";
// import { auth } from "../configs/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FIXME: local test, REMOVE
  const [previewUserInputs, setPreviewUserInputs] = useState();

  const handleSubmitRegisterUser = (e) => {
    e.preventDefault();

    const authRegistrationPayload = {
      email,
      password,
    };
    // FIXME: local test, REMOVE
    console.log(authRegistrationPayload, "test RegPayload");
    setPreviewUserInputs(authRegistrationPayload);
  };

  // REFACTOR with Firebase Auth
  // async-await used as the methods coming from Firebase auth in the backend
  // const submitAuthSignInPayload = async () => {
  //   await createUserWithEmailAndPassword(auth, email, password);
  //   // FIXME: local test, REMOVE
  //   console.log(submitAuthSignInPayload, "test SignInPayload");
  // };

  return (
    <div>
      <p>Not yet a user?</p>
      <h5>Register</h5>
      {/* <form onSubmit={submitAuthSignInPayload}> */}
      <form onSubmit={handleSubmitRegisterUser}>
        <pre>{JSON.stringify(previewUserInputs, undefined, 2)}</pre>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
