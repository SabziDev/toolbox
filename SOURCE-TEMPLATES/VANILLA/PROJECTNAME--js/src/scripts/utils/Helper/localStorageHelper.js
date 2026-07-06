const localStorageHelper = ({ key = "", defaultValue = null }) => {
  const getStoredValue = () => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  };

  const setValue = (value) => localStorage.setItem(key, JSON.stringify(value));

  return [getStoredValue, setValue];
};

export default localStorageHelper;
