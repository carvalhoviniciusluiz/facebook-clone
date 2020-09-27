import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login: React.FC = () => {
  const [, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: response.user,
        })
      })
      .catch((error) => alert(error.message));
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
