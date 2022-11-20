import React from 'react';
import cn from 'classnames';

import s from './AddButton.module.scss';

// Кнопка для открытия формы добавления поста
function AddButton({
   setAddPost = () => {
      console.log('setAddPost in AddButton.jsx is null');
   },
   darkTheme = true,
}) {
   const onClick = () => {
      setAddPost(true);
   };
   return (
      <button
         type='button'
         className={cn(s.addButton, {
            [s.addButton__Dark]: darkTheme,
            [s.addButton__Light]: !darkTheme,
         })}
         onClick={onClick}
      >
         Add Post
      </button>
   );
}

export default AddButton;
