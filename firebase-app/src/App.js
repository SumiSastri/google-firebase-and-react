import "./App.css";
import AuthNav from "./auth-users/AuthNav";
import SignIn from "./auth-users/SignIn";

function App() {
  return (
    <div className='App'>
      <header>
        <AuthNav />
        <SignIn />
      </header>
    </div>
  );
}

export default App;
