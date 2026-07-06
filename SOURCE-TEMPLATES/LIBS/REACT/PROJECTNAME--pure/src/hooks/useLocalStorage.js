import { useState } from "react";

const useLocalStorage = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
