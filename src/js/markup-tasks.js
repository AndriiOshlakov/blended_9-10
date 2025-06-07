import { refs } from './refs.js';
import { getTasks } from './tasks.js';

export function renderTasks() {
  refs.taskList.innerHTML = '';

  const markup = getTasks()
    .map(
      ({ id, title, description }) => `
        <li data-id="${id}">
          <h3>${title}</h3>
          <p>${description}</p>
          <button class="delete-btn">Delete</button>
        </li>`
    )
    .join('');

  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
