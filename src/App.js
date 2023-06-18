import logo from "./logo.svg";
import "./App.css";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import { logout } from "react-social-login";

function App() {
  const handleSocialLogin = (user, err) => {
    console.log(user);
    console.log(err);
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <SocialLogin
        provider="facebook"
        appId="821888192448241"
        callback={handleSocialLogin}
        onLoginFailure={(err) => {
          console.log(err);
        }}
      >
        <button>Login with facebook</button>
      </SocialLogin>

      <button
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default App;
