import React from 'react';
import cn from 'classnames';

import Checkbox from '../../UI/Checkbox/Checkbox';

import s from './Task.module.scss';

// Задание в открытом дне
function Task({
   setDataContainer = () => {
      console.log('setDataContainer in Task.jsx is null');
   },
   darkTheme = true,
   task = {},
   day = {},
}) {
   return (
      <div className={s.task}>
         <div className={s.taskLine}>{task?.line && <img src={task.line} alt='' />}</div>
         <div
            className={cn(s.taskContent, {
               [s.taskContent__Dark]: darkTheme,
               [s.taskContent__Light]: !darkTheme,
            })}
         >
            <div
               className={cn(s.taskContent__Header, {
                  [s.taskContent__HeaderCrossed_Out]: task?.active,
               })}
            >
               {task?.task}
            </div>
            {task?.comment ? (
               <div className={s.taskContent__Text}>
                  {task?.comment && task.comment.length < 25 ? task.comment : `${task.comment.substring(0, 25)}...`}
               </div>
            ) : (
               <div>Нет иформации о задании</div>
            )}
         </div>
         <Checkbox
            onChange={e => {
               setDataContainer(day, dataEl => {
                  dataEl?.tasks.forEach(tasksEl => {
                     if (tasksEl.id === task?.id) {
                        tasksEl.active = !tasksEl.active; // Активировать - деактивировать checkbox
                     }
                  });
                  // Считаем, сколько заданий на день выполнено
                  dataEl.activeTasks = e.target.checked ? dataEl.activeTasks + 1 : dataEl.activeTasks - 1;
               });
            }}
            checked={task?.active}
            name='task'
         />
      </div>
   );
}

export default Task;
