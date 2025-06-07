/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { refs } from './js/refs.js';
import { addTask } from './js/tasks.js';
import { handleDeleteClick } from './js/render-tasks.js';
import { changeTheme } from './js/theme-switcher.js';
import { applySavedTheme } from './js/theme-switcher.js';
import { renderTasks } from './js/markup-tasks.js';

// INIT
renderTasks();
applySavedTheme();

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const title = refs.titleInput.value.trim();
  const desc = refs.descInput.value.trim();

  if (!title || !desc) return;

  addTask(title, desc);
  renderTasks();

  refs.titleInput.value = '';
  refs.descInput.value = '';
});

refs.taskList.addEventListener('click', handleDeleteClick);

refs.themeToggleBtn.addEventListener('click', changeTheme);
