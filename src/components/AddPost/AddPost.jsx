import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import cn from 'classnames';

import closeDark from '../../assets/img/close-settings-light.png';
import closeLight from '../../assets/img/close-settings-dark.png';
import lineYellow from '../../assets/img/line-yellow.svg';
import lineBlue from '../../assets/img/line-blue.svg';
import lineRed from '../../assets/img/line-red.svg';

import 'react-datepicker/dist/react-datepicker.css';
import s from './AddPost.module.scss';

// Форма добавления поста
function AddPost({
   setDataContainer = () => {
      console.log('setDataContainer in AddPost.jsx is null');
   },
   setAddPost = () => {
      console.log('setAddPost in AddPost.jsx is null');
   },
   setData = () => {
      console.log('setData in AddPost.jsx is null');
   },
   darkTheme = true,
   data = {},
}) {
   const [showCalendar, setShowCalendar] = useState(false); // Состояние календаря
   const [startDate, setStartDate] = useState(new Date()); // Дата в календаре
   const [valueTask, setValueTask] = useState(''); // Значение поля task
   const [valueComment, setValueComment] = useState(''); // Значение поля comment

   const closePage = () => {
      setAddPost(false);
   };

   // Меняем местами месяц и день
   const swapDate = date => {
      const newDate = date.split('/');
      [newDate[0], newDate[1]] = [newDate[1], newDate[0]];
      return newDate.join().replace(/,/g, '/');
   };

   // Добавляем в день новое задание
   const newTaskInDay = (day, task, comment) => {
      const lines = [lineRed, lineBlue, lineYellow];
      const newTask = {
         id: day.tasks.length + 1,
         task,
         comment,
         line: lines[Math.floor(Math.random() * lines.length)],
         active: false,
      };
      setDataContainer(day, dataEl => {
         dataEl.checkbox = false;
         dataEl.tasks[dataEl.tasks.length] = newTask;
      });
   };

   // Проверяем, есть ли информация об этом дне
   const checkInfoInData = (date, inputForm, presentOnData) => {
      if (date === '07/07/2022') {
         newTaskInDay(data[0], inputForm[0].value, inputForm[1].value, presentOnData);
         return true;
      }
      if (date === '08/07/2022') {
         newTaskInDay(data[1], inputForm[0].value, inputForm[1].value, presentOnData);
         return true;
      }
      for (let i = 0; i < data.length; i++) {
         if (data[i].date === date) {
            newTaskInDay(data[i], inputForm[0].value, inputForm[1].value, presentOnData);
            return true;
         }
      }
      return false;
   };

   // Создаем день
   const createDay = (date, inputForm) => {
      const newDay = {
         id: data ? data.length + 1 : 1,
         date,
         active: false,
         checkbox: false,
         activeTasks: 0,
         tasks: [
            {
               id: 1,
               task: inputForm[0].value,
               comment: inputForm[1].value,
               line: lineBlue,
               active: false,
            },
         ],
      };
      setData([...data, newDay]);
   };

   const onSubmit = e => {
      e.preventDefault();
      const inputForm = e.target;
      let presentOnData = false; // Присутствие данных о дне

      // Проверка, все ли данные введены
      if (inputForm[0].value && inputForm[1].value && inputForm[2].value !== 'Выбрать дату') {
         const date = swapDate(inputForm[2].value);

         presentOnData = checkInfoInData(date, inputForm);

         if (!presentOnData) {
            createDay(date, inputForm);
         }
      }
   };
   return (
      <div className={s.addPost}>
         <div className={s.container} onClick={closePage} />
         <div
            className={cn(s.addPost__Content, {
               [s.addPost__ContentDark]: darkTheme,
               [s.addPost__ContentLight]: !darkTheme,
            })}
         >
            <div className={s.addPost__ContentHeader}>
               <div>Add Post</div>
               <div
                  className={cn(s.addPost__ContentHeader_Close, {
                     [s.addPost__ContentHeader_CloseLigth]: !darkTheme,
                  })}
                  onClick={closePage}
               >
                  {darkTheme ? (
                     <img src={closeDark} alt='' width='20px' height='20px' />
                  ) : (
                     <img src={closeLight} alt='' width='35px' height='35px' />
                  )}
               </div>
            </div>
            <form className={s.addPost__ContentForm} onSubmit={onSubmit}>
               <input
                  onChange={e => setValueTask(e.target.value)}
                  placeholder='Название задания'
                  className={cn(s.input, {
                     [s.inputDark]: darkTheme,
                     [s.inputLight]: !darkTheme,
                  })}
                  value={valueTask}
                  type='text'
               />
               <input
                  onChange={e => setValueComment(e.target.value)}
                  placeholder='Комментарий'
                  className={cn(s.input, {
                     [s.inputDark]: darkTheme,
                     [s.inputLight]: !darkTheme,
                  })}
                  value={valueComment}
                  type='text'
               />
               {showCalendar ? (
                  <DatePicker
                     className={cn(s.input, s.inputDate, {
                        [s.inputDark]: darkTheme,
                        [s.inputLight]: !darkTheme,
                     })}
                     selected={startDate}
                     onChange={date => setStartDate(date)}
                  />
               ) : (
                  <input
                     className={cn(s.input, s.inputDate, {
                        [s.inputDark]: darkTheme,
                        [s.inputLight]: !darkTheme,
                     })}
                     value='Выбрать дату'
                     type='button'
                     onClick={() => setShowCalendar(sc => !sc)}
                  />
               )}
               <button
                  className={cn(s.button, {
                     [s.buttonDark]: darkTheme,
                     [s.buttonLight]: !darkTheme,
                  })}
                  type='submit'
               >
                  +
               </button>
            </form>
         </div>
      </div>
   );
}

export default AddPost;
