import { useState } from "react";

const useLocalStorage = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageResult = localStorage.getItem(key);

    return localStorageResult === null
      ? defaultValue
      : JSON.parse(localStorageResult);
  });

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
