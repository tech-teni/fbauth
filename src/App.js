import React, { useCallback, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { OldSocialLogin as SocialLogin } from "react-social-login";

import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter
} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const App = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const amazonRef = useRef();
  const instagramRef = useRef();
  const googleRef = useRef();
  const facebookRef = useRef();
  const microsoftRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const pinterestRef = useRef();
  const twitterRef = useRef();
// 


  const handleSocialLogin = (user, err) => {
    console.log(user);
    console.log(err);
  };

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
      onLoginFailure={(err) => {}}>
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
    </>
  );
;
        }
export default App;







































