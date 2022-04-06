import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import "./header.css";
import avatar from "../../assets/img/avatar/avatar-1.png";
import Button from "../Button/Button";

const Header = ({ bgColor, btnClass }) => {
  let navigate = useNavigate(); 
  let isAuth;

  const handleClick = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('userId');
      isAuthHandler();
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  const isAuthHandler = () => {
    
    localStorage.getItem('userId') === null ? isAuth = false : isAuth = true;        
  };
  isAuthHandler();
  
  return (
    <header>
      <div className="menu">
        <div className="menu__item menu__item--left"></div>   
        {isAuth &&
        <div className="menu__item menu__item--right">
        <img src={avatar} alt="" className="menu__item__img" />
        <Button
          btnClass="menu__item__button"
          bgColor="purple"
          onClick={handleClick}
        >
          Log out
        </Button>
      </div>
      }     
        
      </div>
    </header>
  );
};

export default Header;