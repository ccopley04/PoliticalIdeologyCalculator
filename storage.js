//Return the value that paired with the given key, that is aved in local storage
export function inStorage(key) {
  if (key in localStorage) {
    return localStorage.getItem(key);
  } else {
    return "none";
  }
}

//Write the given key value pair to local storage
export function writeToStorage(key, value) {
  localStorage.setItem(key, value);
}
