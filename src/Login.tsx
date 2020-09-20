import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  const signIn = () => {
    // sign in...
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
      </div>
      <button type="button" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
