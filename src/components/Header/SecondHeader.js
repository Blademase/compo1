import React from 'react';
import './SecondHeader.css';
import ManagerIcon from "../images/ManagerIcon.png"
import SaleIcon from "../images/SaleIcon.png"
function SecondHeader() {
  return (
    <div id="SecondHeader">

        <div id="MenuBtns">
    <button>Мои заказы</button>
    <button>Сотрудники</button>
    <button>Шаблоны заказов</button>
    <button>Обращения</button>
        </div>

        <div id="ManagerSaleBlog">
        
<button id="ManagerBtn">
    <img src={ManagerIcon}/>
    <span>Ваш менеджер</span>
</button>

<img src={SaleIcon}/>
<button>Акции</button>
<button>Блог</button>
    
        </div>
        
    </div>
   
  );
}

export default SecondHeader;
