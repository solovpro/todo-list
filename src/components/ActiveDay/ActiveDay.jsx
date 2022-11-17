import React, { useEffect } from 'react';
import cn from 'classnames';

import HeaderActiveDay from './HeaderActiveDay/HeaderActiveDay';
import Task from './Task/Task';

import s from './ActiveDay.module.scss';

// Открытый день заданий
function ActiveDay({
   setDataContainer = () => {
      console.log('setDataContainer is null');
   },
   darkTheme = true,
   day = {},
}) {
   // Отслеживаем, выполнены ли все задания и если да, то ставим checkbox = true на день
   useEffect(() => {
      setDataContainer(day, dataEl => {
         dataEl.checkbox = dataEl.activeTasks === dataEl.tasks.length;
      });
   }, [day?.activeTasks]);
   return (
      <div className={s.open}>
         <HeaderActiveDay setDataContainer={setDataContainer} darkTheme={darkTheme} day={day} />
         <div
            className={cn(s.openContent, {
               [s.openContent__Dark]: darkTheme,
               [s.openContent__Light]: !darkTheme,
            })}
         >
            {day ? (
               day.tasks.map(task => (
                  <Task setDataContainer={setDataContainer} darkTheme={darkTheme} key={task.id} task={task} day={day} />
               ))
            ) : (
               <div>Нет информации о дне</div>
            )}
         </div>
      </div>
   );
}

export default ActiveDay;
