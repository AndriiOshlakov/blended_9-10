import { localStorageApi } from './local-storage-api';
import { refs } from './refs';

export function changeTheme() {
  const isDark = refs.body.classList.toggle('dark');
  localStorageApi.saveTheme(isDark ? 'dark' : 'light');
}

export function applySavedTheme() {
  const saved = localStorageApi.loadTheme();
  if (saved === 'dark') {
    refs.body.classList.add('dark');
  }
}
