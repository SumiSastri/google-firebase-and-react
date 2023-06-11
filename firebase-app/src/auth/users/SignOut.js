import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";

const SignOut = () => {
  const navigate = useNavigate();
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

    navigate("/");
  };

  return (
    <div className='App-header'>
      {authUser ? (
        <form onSubmit={signOutAuthUser}>
          <h4>You have signed in with Email ID: {authUser.email}</h4>
          <button type='submit'>Sign Out</button>
        </form>
      ) : (
        <Link to='/sign-in'>
          <h2>Sign in to your GCS account</h2>
        </Link>
      )}
    </div>
  );
};

export default SignOut;
