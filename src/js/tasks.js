import { localStorageApi } from './local-storage-api.js';

let tasks = localStorageApi.loadTasks();

export function addTask(title, description) {
  const task = {
    id: Date.now().toString(),
    title,
    description,
  };
  tasks.push(task);
  localStorageApi.saveTasks(tasks);
  return task;
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorageApi.saveTasks(tasks);
}

export function getTasks() {
  return tasks;
}
