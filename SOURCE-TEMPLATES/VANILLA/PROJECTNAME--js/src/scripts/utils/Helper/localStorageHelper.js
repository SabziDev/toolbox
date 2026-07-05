const localStorageHelper = ({ key = "", defaultValue = "" }) => {
  const getStoredValue = () => {
    const localStorageResult = JSON.parse(localStorage.getItem(key));

    return localStorageResult === null ? defaultValue : localStorageResult;
  };

  const setValue = (value = "") =>
    localStorage.setItem(key, JSON.stringify(value));

  return [getStoredValue, setValue];
};

export default localStorageHelper;
