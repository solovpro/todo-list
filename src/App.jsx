import { useState } from 'react';
import cn from 'classnames';

import InactiveDay from './components/InactiveDay/InactiveDay';
import ActiveDay from './components/ActiveDay/ActiveDay';
import AddButton from './components/AddButton/AddButton';
import Settings from './components/Settings/Settings';
import AddPost from './components/AddPost/AddPost';
import Header from './components/Header/Header';

import lineYellow from './assets/img/line-yellow.svg';
import lineBlue from './assets/img/line-blue.svg';
import lineRed from './assets/img/line-red.svg';

import s from './App.module.scss';

function App() {
   const [darkTheme, setDarkTheme] = useState(true);
   const [settings, setSettings] = useState(false); // Состояние настроек
   const [addPost, setAddPost] = useState(false); // Состояние добавление поста
   // Массив данных о заданиях
   const [data, setData] = useState([
      {
         id: 1,
         date: 'Today',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
      {
         id: 2,
         date: 'Tomorrow',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
      {
         id: 3,
         date: '09/07/2022',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
      {
         id: 4,
         date: '10/07/2022',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
      {
         id: 5,
         date: '11/07/2022',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
      {
         id: 6,
         date: '12/07/2022',
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: 'Task 1',
               comment: 'Comment 1',
               line: lineRed,
               active: false,
            },
            {
               id: 2,
               task: 'Task 2',
               comment: 'Comment 2',
               line: lineBlue,
               active: false,
            },
            {
               id: 3,
               task: 'Task 3',
               comment: 'Comment 3',
               line: lineYellow,
               active: false,
            },
         ],
      },
   ]);

   // Изменения массива данных
   const setDataContainer = (day, func) => {
      const dataArr = data;
      dataArr?.forEach(dataEl => {
         if (dataEl.id === day?.id) {
            func(dataEl);
         }
      });
      setData([...dataArr]);
   };
   return (
      <div
         className={cn(s.container, {
            [s.containerDark]: darkTheme,
            [s.containerLight]: !darkTheme,
         })}
      >
         <div
            className={cn(s.app, {
               [s.appDark]: darkTheme,
               [s.appLight]: !darkTheme,
            })}
         >
            <Header setSettings={setSettings} darkTheme={darkTheme} settings={settings} />
            <AddButton setAddPost={setAddPost} darkTheme={darkTheme} />
            {addPost && (
               <AddPost
                  setDataContainer={setDataContainer}
                  setAddPost={setAddPost}
                  darkTheme={darkTheme}
                  setData={setData}
                  data={data}
               />
            )}
            {settings && <Settings setDarkTheme={setDarkTheme} setSettings={setSettings} darkTheme={darkTheme} />}
            {data ? (
               data.map(day => {
                  return day.active ? (
                     <ActiveDay
                        setDataContainer={setDataContainer}
                        darkTheme={darkTheme}
                        setData={setData}
                        key={day.id}
                        data={data}
                        day={day}
                     />
                  ) : (
                     <InactiveDay
                        setDataContainer={setDataContainer}
                        darkTheme={darkTheme}
                        setData={setData}
                        key={day.id}
                        data={data}
                        day={day}
                     />
                  );
               })
            ) : (
               <div>Ошибка получения данных</div>
            )}
         </div>
      </div>
   );
}

export default App;
