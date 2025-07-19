export function inStorage(key) {
  if (key in localStorage) {
    return localStorage.getItem(key);
  } else {
    return "none";
  }
}

export function writeToStorage(key, value) {
  localStorage.setItem(key, value);
}
