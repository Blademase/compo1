import React from 'react';
import FooterThirdPresentationIcon from "../images/FooterThirdPresentationICon.png"
import FooterThirdVideoIcon from "../images/FooterThirdVideoIco.png"
import FooterThirdFAQIcon from "../images/FooterThirdFAQIcon.png"
import FooterThirdYouTubeIcon from "../images/FooterThirdYouTubeIcon.png"
import FooterThirdLogo from "../images/FooterThirdLogo.png"
import './FooterThird.css';
function FooterThird() {
  return (
    <div id="FooterThird">
        <div id="FooterThirdIcons">
        <div className='FooterThirdIconsRlc'><img src={FooterThirdPresentationIcon}/><span>PDF презентация</span></div>
        <div className='FooterThirdIconsRlc'><img src={FooterThirdVideoIcon}/><span>Видео инструкция</span></div>
        <div className='FooterThirdIconsRlc'><img src={FooterThirdFAQIcon}/><span>FAQ</span></div>
        <div className='FooterThirdIconsRlc'><img src={FooterThirdYouTubeIcon}/><span id="FooterThirdIconsYoutube">Мы на YouTube</span></div>
        <div><span>Политика конфиденциальности</span></div>
        <div><span>Лицензионные соглашения</span></div>
        
        </div>
        <div id="FooterThirdText">
            Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации".
        </div>
        <div id="FooterThirdLogo">
          <img src={FooterThirdLogo}/> 
            Разработка платформы
        </div>
        
    </div>
  );
}

export default FooterThird;
