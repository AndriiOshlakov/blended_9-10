import { deleteTask } from './tasks.js';
import { renderTasks } from './markup-tasks.js';

export function handleDeleteClick(e) {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.closest('li').dataset.id;
    deleteTask(id);
    renderTasks();
  }
}
