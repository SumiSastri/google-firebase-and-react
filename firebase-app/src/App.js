import "./App.css";
import AuthNav from "./auth-users/AuthNav";
// import Register from "./auth-users/Register";
import SignIn from "./auth-users/SignIn";
import SignOut from "./auth-users/SignOut";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Firebase</h1>
        <AuthNav />
        {/* <Register /> */}
        <SignIn />
        <SignOut />
      </header>
    </div>
  );
}

export default App;
