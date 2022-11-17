import React from 'react';
import cn from 'classnames';

import s from './Checkbox.module.scss';

// Переключатель выполненного / невыполненного задания и темы
function Checkbox({
   onChange = () => {
      console.log('onChange is null');
   },
   checked = false,
   name = 'settings',
}) {
   return (
      <div className={cn(s.checkbox, s.checkboxSettings)}>
         <label className={s.checkboxSwitch}>
            <input type='checkbox' onChange={onChange} checked={checked} />
            <span
               className={cn(s.checkboxSwitch__Slider, {
                  [s.checkboxSwitch__SliderActive]: checked,
                  [s.checkboxSwitch__SliderInactive]: !checked,
                  [s.checkboxSwitch__SliderTask_Active]: name === 'task' && checked,
                  [s.checkboxSwitch__SliderTask_Inactive]: name === 'task' && !checked,
               })}
            />
         </label>
      </div>
   );
}

export default Checkbox;
