import { useState } from "react";

const useLocalStorage = ({ key = "", defaultValue = "" }) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localStorageResult = JSON.parse(localStorage.getItem(key));

    return localStorageResult === null ? defaultValue : localStorageResult;
  });

  const setValue = (value = "") => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
