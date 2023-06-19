import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import FacebookLogin from 'react-facebook-login';

function App() {
  const handleSocialLogin = (user, err) => {
    console.log(user);
    console.log(err);
  };

 const  responseFacebook=(response)=> {
    console.log(response);
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <button>
        <SocialLogin
          onClick={(e) => {
            console.log("hejej");
          }}

          provider="facebook"
          appId="821888192448241"
          callback={handleSocialLogin}
          onLoginFailure={(err) => {
            console.log(err);
          }}
        >
          Login with facebook
        </SocialLogin>
      </button>
      <button
      
        onClick={(e) => {
          e.preventDefault();
        }}
      >
         <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={responseFacebook}
        >
        Log in with facebook react
        </FacebookLogin>
      </button>
    </div>
  );
}

export default App;
