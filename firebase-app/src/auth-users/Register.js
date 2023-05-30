import { React, useState } from "react";

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
    console.log(authRegistrationPayload, "test SignInPayload");
    setPreviewUserInputs(authRegistrationPayload);
  };

  return (
    <div>
      <p>Not a user?</p>
      <h5>Register</h5>
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
