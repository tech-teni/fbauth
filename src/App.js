import logo from './logo.svg';
import './App.css';
import { OldSocialLogin as SocialLogin } from "react-social-login";



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
    >
      <button>Login with Google</button>
    </SocialLogin>
    </div>
  );
}

export default App;
