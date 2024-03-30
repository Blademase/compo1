import React from 'react';
import './FirstHeader.css';
import Logo from "../images/Brand.png"
import MenuIcon from "../images/MenuIcon.png"
import InputFirstIcon from "../images/InputFirstIcon.png"
import InputSecondIcon from "../images/InputSecondIcon.png"
import NotificationIcon from "../images/NotificationIcon.png"
import NonLikeIcon from "../images/NonLikeIcon.png"
import ShopIcon from "../images/ShopIcon.png"
import Avatar from "../images/Avatar.png"
import AvatarDownIcon from "../images/AvatarDownIcon.png"
function FirstHeader() {
  return (
    <div id="FirstHeader">
        <img src={Logo} id="Logo"/>
      
        <button id="MenuButton">       
        <img src={MenuIcon}/>
        <span>Меню</span>
        </button>
        <div id="SearchBar">
        <input placeholder='Название запроса'/>
       <div id="InputIcons">
        <img src={InputFirstIcon}/>
        <img src={InputSecondIcon}/>
      </div>
        </div>
       <div id="AccountBar">
        <div id="NotificationNonLikeIcon">      
        <img src={NotificationIcon}/>
       <div id='BtnVerticalLine'></div>
       <img src={NonLikeIcon}/>
       </div>

       <div id="ShopBar">
       <img src={ShopIcon}/>
       <span>144 333Р</span>
       </div>
       <div id="AvatarBar">
       <img src={Avatar}/>
       <span>Ермаков Е.</span>
       <img id="AvatarDownIcon" src={AvatarDownIcon}/>
       </div>
       </div>
      
    </div>
  );
}

export default FirstHeader;
