import React, { useState } from 'react';
import './Body.css';
import MainPhoto from "../images/MainPhoto.png"
import LeftIcon from "../images/LeftIcon.png"
import FirstPhoto from "../images/FirstPhoto.png"
import SecondPhoto from "../images/SecondPhoto.png"
import ThirdPhoto from "../images/ThirdPhoto.png"
import FourthPhoto from "../images/FourthPhoto.png"
import RightIcon from "../images/RightIcon.png"
import ToggleOn from "../images/ToggleOn.png"
import BodyShopIcon from "../images/BodyShopIcon.png"
import LikeButtonImage from "../images/LikeButtonImage.png"
import LikeButtonImage1 from "../images/Button.png"
function Body() {
    const [isChecked, setIsChecked] = useState(false);
   
    const [showCounter, setShowCounter] = useState(false);
    const [amount,setAmount]= useState(' штук');
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
      console.log(count);
if (count==-1) {setAmount(" штук")} else 
if (count==0) {setAmount(" штука")} else
setAmount(" штуки");
    
 
    };
  

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }  console.log(count);
      if (count==-1) {setAmount(" штука")} else 
      if (count==0) {setAmount(" штука")} else
      setAmount(" штуки");
    
    
      
    
    };

    const handleBuy = () => {
      setShowCounter(true);
      setCount(0);
    };
   
    const toggleHandler = () => {
      setIsChecked(prevState => !prevState);}
      const [like, setLike] = useState(true);

      const handleLikeClick = () => {
          setLike(!like);
      };
  return (
    <div id="Body">
        <p id="NameOfProduct">Кроссовки мужские  skechers summy dale</p>
    <div id="BodyContent">
    <div id="ImagesBar">
  
    <img id="MainPhoto" src={MainPhoto}/>
    <div id="SwipeImagesBar">
        <div id="LeftIcon">
    <img src={LeftIcon}/>
    </div>
    <img src={FirstPhoto}/>
    <img src={SecondPhoto}/>
    <img src={ThirdPhoto}/>
    <img src={FourthPhoto}/>
    <div id="RightIcon">
    <img src={RightIcon}/>
    </div>
    </div>
    </div>
    <div id="AboutProductRlc">
    <div id="AboutProduct">
        <div id="Price">
            <span id="PriceNoSale">166 534.00 цена без скидки</span>
            <span id="PriceSale">122 566 ₽ <span id="Sale">-15%</span></span>
           
            <div id="AmountsOfProduct"><span id="AmountsOfProductSpan">12 штук в уп.</span>
            <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={toggleHandler}
        
      />
      <label htmlFor="toggle" className="toggle-label" />
      Заказ упаковкой
            </div>
            <div id="PriceHorizontalLine"></div>
           
            <div id="AmountsDate">
            <div className='AmountsDateRlc'>
            <span className='AmountsDateMainText'>Завтра</span>
            <span className='AmountsDateMinorText'>Доставка</span>
            </div> 
            <div className='AmountsDateRlc'>
            <span className='AmountsDateMainText'>7шт.</span>
            <span className='AmountsDateMinorText'>Тарасовка</span>
            </div>
             <div className='AmountsDateRlc'>
            <span className='AmountsDateMainText'>7шт.</span>
            <span className='AmountsDateMinorText'>Тарасовка</span>
            </div>
            </div>

            <div id="BuyLikeBar">
    
        {showCounter ? (
        <div id="Counter">
          <button onClick={decrement} id="BuyBtnMinus">-</button>
          <span>{count+amount}</span>
          <button onClick={increment} id="BuyBtnPlus">+</button>
        </div>
      ) : (
        <div id="NonCounter">
        <button onClick={handleBuy} id="BuyBtn">
          <img src={BodyShopIcon}/>В корзину</button>
        </div>
      )}

                <button id="LikeButton" onClick={handleLikeClick}>{like ? <img src={LikeButtonImage}/> : <img src={LikeButtonImage1}/>}</button>
                
            </div>

           
        </div>
      
    <div id='AboutProductVerticalLine'></div>

    <div id="Сharacteristics">
    <span id="СharacteristicsMainText">Характеристики</span>
    <div id="СharacteristicsContent">
    <div id="СharacteristicsFirstColumn">
    <span className="СharacteristicsContentMainText">ELC00696</span>
    <span className="СharacteristicsContentMinorText">Код поставщика</span>

    <span className="СharacteristicsContentMainText">ELC00696</span>
    <span className="СharacteristicsContentMinorText">Код РАЭК</span>
    
    <span className="СharacteristicsContentMainText">Electric used</span>
    <span className="СharacteristicsContentMinorText">Бренд</span>

    <span className="СharacteristicsContentMainText">ELC0200000696</span>
    <span className="СharacteristicsContentMinorText">Код производителя</span>

    </div>
    <div id="СharacteristicsSecondColumn">
    <span className="СharacteristicsContentMainText">ELC0200000696</span>
    <span className="СharacteristicsContentMinorText">Артикул</span>
    
    <span className="СharacteristicsContentMainText">ELC00696</span>
    <span className="СharacteristicsContentMinorText">Код ЕТМ</span>

    <span className="СharacteristicsContentMainText">ELC00696</span>
    <span className="СharacteristicsContentMinorText">Серия</span>
    </div>
    </div> 
    </div>
    </div>
       <div id="AboutProductText">
        <div id="AboutProductMainText">
        Описание товара
        </div>
        <div id="AboutProductMinorText">
        Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
        </div>
        
       </div>
       
    </div>
    </div>


    </div>
  );
}

export default Body;
