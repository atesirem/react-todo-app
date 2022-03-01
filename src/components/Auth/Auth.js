import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import Button from "../Button/Button";
import "./Auth.css";

const Auth = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleClick = () => {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userId", JSON.stringify(user.uid));
        navigate("/dashboard");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("userId", JSON.stringify(user.uid));
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
          });
      });


   
  };

  return (
    <div className="auth">
      <form className="login-form" id="loginForm">
        <div className="login-form__row">
          <input
            className="form-input login-form__row__input"
            type="text"
            id="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="E-mail"
          ></input>
        </div>
        <div className="login-form__row">
          <input
            className="form-input login-form__row__input"
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            placeholder="Password"
          ></input>
        </div>
        <div className="login-form__row">
          <Button
            btnClass="login-form__row__button"
            bgColor="purple"
            onClick={handleClick}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
