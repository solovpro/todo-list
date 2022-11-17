import React from 'react';
import cn from 'classnames';

import lineInactive from '../../assets/img/line-inactive.svg';
import checkDark from '../../assets/img/check-inactive-day-dark.png';
import checkLight from '../../assets/img/check-inactive-day-light.svg';

import s from './InactiveDay.module.scss';

// Закрытый список дня
function InactiveDay({
   setDataContainer = () => {
      console.log('setDataContainer is null');
   },
   darkTheme = true,
   day = {},
}) {
   return (
      <div
         className={cn(s.closed, {
            [s.closedDark]: darkTheme,
            [s.closedLight]: !darkTheme,
         })}
         onClick={() =>
            setDataContainer(day, dataEl => {
               dataEl.active = true; // Открыть день
            })
         }
      >
         <div className={s.closedLine}>
            <img src={lineInactive} alt='' />
         </div>
         <div className={s.closedContent}>
            <div>{day?.date}</div>
            <div className={s.closedContent__Text}>Tasks</div>
         </div>
         <div className={s.closedCheck}>
            <img src={darkTheme ? checkLight : checkDark} width='21px' height='21px' alt='' />
         </div>
      </div>
   );
}

export default InactiveDay;
