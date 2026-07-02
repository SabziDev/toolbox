import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageResult = localStorage.getItem(key);

    return localStorageResult === null ? defaultValue : localStorageResult;
  });

  const setValue = (value) => {
    localStorage.setItem(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
