import React from 'react';
import cn from 'classnames';

import checkInactiveLight from '../../../assets/img/day-inactive-dark.png';
import checkInactiveDark from '../../../assets/img/day-inactive-light.png';
import checkActiveLight from '../../../assets/img/day-active-dark.png';
import checkActiveDark from '../../../assets/img/day-active-light.svg';

import s from './HeaderActiveDay.module.scss';

// Шапка открытого дня
function HeaderActiveDay({
   setDataContainer = () => {
      console.log('setDataContainer in HeaderActiveDay.jsx is null');
   },
   darkTheme = true,
   day = {},
}) {
   return (
      <div className={s.header}>
         <div className={s.headerImage}>
            {day?.checkbox ? (
               <img
                  src={darkTheme ? checkActiveDark : checkActiveLight}
                  className={cn({
                     [s.headerImage__Content]: !day?.checkbox,
                  })}
                  width='23px'
                  height='23px'
                  alt=''
               />
            ) : (
               <img width='23px' height='23px' src={darkTheme ? checkInactiveDark : checkInactiveLight} alt='' />
            )}
         </div>
         <div
            onClick={() =>
               setDataContainer(day, dataEl => {
                  dataEl.active = false; // Закрыть день
               })
            }
            className={cn(s.headerText, {
               [s.headerText__Dark]: darkTheme,
               [s.headerText__Light]: !darkTheme,
            })}
         >
            {`${day?.date} Tasks`}
         </div>
      </div>
   );
}

export default HeaderActiveDay;
