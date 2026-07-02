const localStorageHelper = (key, defaultValue) => {
  const getValue = () => {
    const localStorageResult = localStorage.getItem(key);

    return localStorageResult === null ? defaultValue : localStorageResult;
  };

  const setValue = (value) => localStorage.setItem(key, value);

  return [getValue, setValue];
};

export default localStorageHelper;
