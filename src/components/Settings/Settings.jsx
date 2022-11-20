import React from 'react';
import cn from 'classnames';

import Checkbox from '../UI/Checkbox/Checkbox';

import closeDark from '../../assets/img/close-settings-light.png';
import closeLight from '../../assets/img/close-settings-dark.png';

import s from './Settings.module.scss';

// Настройки приложения
function Settings({
   setDarkTheme = () => {
      console.log('setDarkTheme in Settings.jsx is null');
   },
   setSettings = () => {
      console.log('setSettings in Settings.jsx is null');
   },
   darkTheme = true,
}) {
   const onClick = () => {
      setSettings(false);
   };
   return (
      <div className={s.settings}>
         <div className={s.container} onClick={onClick} />
         <div
            className={cn(s.settingsContent, {
               [s.settingsContent__Dark]: darkTheme,
               [s.settingsContent__Light]: !darkTheme,
            })}
         >
            <div className={s.settingsContent__Header}>
               <div>Settings</div>
               <div
                  className={cn(s.settingsContent__HeaderClose, {
                     [s.settingsContent__HeaderClose_Ligth]: !darkTheme,
                  })}
                  onClick={onClick}
               >
                  {darkTheme ? (
                     <img src={closeDark} alt='' width='20px' height='20px' />
                  ) : (
                     <img src={closeLight} alt='' width='35px' height='35px' />
                  )}
               </div>
            </div>
            <div className={s.settingsContent__Theme}>
               <div className={s.settingsContent__ThemeName}>{darkTheme ? 'Темная тема' : 'Светлая тема'}</div>
               <div>
                  <Checkbox
                     onChange={() => {
                        setDarkTheme(dt => !dt);
                     }}
                     checked={!darkTheme}
                     name='settings'
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Settings;
