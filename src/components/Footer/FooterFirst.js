import React from 'react';
import './FooterFirst.css';
import FooterBrandIcon from "../images/FooterBrandIcon.png"
function FooterFirst() {
  return (
    <div id="FooterFirst">
      
      <img src={FooterBrandIcon}/>
      <div id="FooterFirstContent">
      <div id="FirstFooterFirstRow">
      <div id="FirstFooterFirstRowText1">
        <span className="FirstFooterFirstRowMainText">8 800 841-95-95</span>
        <span className="FirstFooterFirstRowMinorText">Служба поддержки</span>
        
      </div>
      <div id="FirstFooterFirstRowText2">
      <span className="FirstFooterFirstRowMainText">support@sport.ru</span>
      <span className="FirstFooterFirstRowMinorText">Служба поддержки</span>
        
      </div>
      
      </div>
      <div id="SecondFooterFirstRow">
        <button>Вакансии</button>
        <button>Блог</button>
        <button>Акции</button>
        <button>Предложить идею</button>
        
      </div>
      </div>
    </div>
  );
}

export default FooterFirst;
