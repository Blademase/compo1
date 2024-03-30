import React, { useState } from 'react';

function YourComponent() {
  const [count, setCount] = useState(0); // Инициализация состояния счетчика
  const [like, setLike] = useState(true);
  const [isChecked,setIsChecked]=useState(true)
    const toggleHandler = () => {
      setIsChecked(prevState => !prevState);}
  

   
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // Увеличение счетчика на 1
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1); // Уменьшение счетчика на 1, если он больше 0
    }
  };

  const handleLikeClick = () => {
    // Действия при нажатии на кнопку "В корзину"
    // Здесь можно также включить логику для отображения каунтера
  };

  return (
    <div>
      <button id="BuyBtn" onClick={handleLikeClick}>
        {like ? 
          <div id="NonCounter">
            В корзину
          </div> : 
          <div id="Counter">
            <button onClick={handleIncrement}>+</button>
            <div>{count}</div>
            <button onClick={handleDecrement}>-</button>
          </div>
        }
      </button>
    </div>
  );
}

export default YourComponent;