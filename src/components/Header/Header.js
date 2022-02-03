import React from 'react';
import './header.css';
import avatar from '../../assets/img/avatar/avatar-1.png';
import Button from '../Button/Button';




const Header = ({bgColor,btnClass}) => {
  return (
    <header>  
      <div className='menu'>
        <div className="menu__item menu__item--left">
            
        </div>

        <div className="menu__item menu__item--right">
          <img src={avatar} alt="" className='menu__item__img'/>          
          <Button btnClass='menu__item__button' bgColor='purple' >Log out</Button>
        </div>

      </div>
      
    </header>
  )
}

export default Header;

