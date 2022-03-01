import React from 'react';
import './Button.css';

const Button = ({children,bgColor,btnClass,onClick }) => {

  return (
    <button type='button' className={`button button--${bgColor} ${btnClass}`} onClick={(e) => {onClick(e)}} >{children}</button>
  )
}
export default Button;