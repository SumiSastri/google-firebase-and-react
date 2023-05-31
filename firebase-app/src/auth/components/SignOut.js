import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
// data
import { auth } from "../../configs/firebase";

const SignOut = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const signOutAuthUser = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth).then(() => {
        console.log(`Success ${authUser.email} logged out`);
      });
    } catch (err) {
      console.log(err, "failed logout user - check code, logs");
    }
  };

  return (
    <div>
      {authUser ? (
        <form onSubmit={signOutAuthUser}>
          <h5>Click to sign out from your email: {authUser.email}</h5>
          <button type='submit'>Sign Out</button>
        </form>
      ) : (
        <h2>Sign in to your GCS account</h2>
      )}
    </div>
  );
};

export default SignOut;
