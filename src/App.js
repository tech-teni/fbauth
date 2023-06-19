import React, { useCallback, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';

// CUSTOMIZE ANY UI BUTTON
import { FacebookLoginButton } from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const App = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const facebookRef = useRef();
  //

  const handleSocialLogin = (user, err) => {
    console.log(user);
    console.log(err);
  };

 

  console.log(FacebookLoginClient);
  //  const  responseFacebook=(response)=> {
  //     console.log(response);
  //   }

  //
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  return (
    <>
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <button>
          <SocialLogin
            onClick={(e) => {
              console.log("hejej");
            }}
            provider="facebook"
            appId="821888192448241"
            callback={handleSocialLogin}
            onLoginFailure={(err) => {}}
          >
            <h1>hello</h1>
            Login with facebook
          </SocialLogin>
        </button>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialFacebook
          ref={facebookRef}
          appId="821888192448241"
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>

      {/* // custom render function */}
      <FacebookLogin
        appId="821888192448241"
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
        render={({ onClick, logout }) => (
          <button onClick={onClick} onLogoutClick={logout} > login</button>
        )}
      />


      <button onClick={(e)=>{
        e.preventDefault()
        FacebookLoginClient.getLoginStatus((res) => {
          console.log(res);
        });
        FacebookLoginClient.logout((res) => {
          console.log(res);
        });
      }}>Logout</button>
    </>
  );
};
export default App;
