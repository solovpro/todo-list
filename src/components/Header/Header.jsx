import React from 'react';

import settingsWhite from '../../assets/img/settings-light.svg';
import settingsBlack from '../../assets/img/settings-dark.png';

import s from './Header.module.scss';

// Шапка приложения
function Header({
   setSettings = () => {
      console.log('setSettings in Header.jsx is null');
   },
   settings = false,
   darkTheme = true,
}) {
   const onClick = () => {
      setSettings(!settings);
   };
   return (
      <div className={s.header}>
         <div className={s.headerText}>To Do</div>
         <div className={s.headerImage} onClick={onClick}>
            <img width='28.5px' height='30px' src={darkTheme ? settingsWhite : settingsBlack} alt='' />
         </div>
      </div>
   );
}

export default Header;
