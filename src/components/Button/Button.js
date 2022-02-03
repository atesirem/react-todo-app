import React from 'react';
import './Button.css';

const Button = ({children,bgColor,btnClass }) => {

  return (
    <button type="button" className={`button button--${bgColor} ${btnClass}`} >{children}</button>
  )
}
export default Button;