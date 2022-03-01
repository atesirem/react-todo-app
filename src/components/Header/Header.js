import React from "react";
import { useNavigate } from "react-router-dom";

import "./header.css";
import avatar from "../../assets/img/avatar/avatar-1.png";
import Button from "../Button/Button";

const Header = ({ bgColor, btnClass }) => {
  let navigate = useNavigate(); 
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <header>
      <div className="menu">
        <div className="menu__item menu__item--left"></div>
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
      </div>
    </header>
  );
};

export default Header;