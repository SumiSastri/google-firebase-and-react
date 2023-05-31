import "./App.css";
import AuthNav from "./auth/routes/AuthNav";
import SignIn from "./auth/components/SignIn";

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
