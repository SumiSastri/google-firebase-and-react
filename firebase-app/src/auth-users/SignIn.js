import { React, useState } from "react";
// import { auth } from "../configs/firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // FIXME: local test, REMOVE
  const [previewUserInputs, setPreviewUserInputs] = useState();

  const handleSubmitAuthUser = (e) => {
    e.preventDefault();

    const authSignInPayload = {
      email,
      password,
    };
    // FIXME: local test, REMOVE
    console.log(authSignInPayload, "test SignInPayload");
    setPreviewUserInputs(authSignInPayload);
  };

  return (
    <div>
      <p>Already have an account?</p>
      <h5>Sign-In</h5>
      <form onSubmit={handleSubmitAuthUser}>
        <pre>{JSON.stringify(previewUserInputs, undefined, 2)}</pre>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
