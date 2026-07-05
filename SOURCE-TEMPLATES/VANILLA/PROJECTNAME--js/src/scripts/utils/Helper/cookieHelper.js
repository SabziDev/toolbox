const cookieHelper = ({ key = "", defaultValue = "" }) => {
  const getStoredValue = async () => {
    const cookieResult = JSON.parse(await cookieStore.get(key));

    return cookieResult === null ? defaultValue : cookieResult.value;
  };

  const setValue = async (cookieOptions = {}) => {
    const value = JSON.stringify(cookieOptions.value);
    const options = { name: key, value, ...cookieOptions };

    await cookieStore.set(options);
  };

  return [getStoredValue, setValue];
};

export default cookieHelper;
