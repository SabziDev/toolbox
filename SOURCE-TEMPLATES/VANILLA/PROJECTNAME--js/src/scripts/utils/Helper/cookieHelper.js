const cookieHelper = (key, defaultValue) => {
  const getStoredValue = async () => {
    const cookieResult = await cookieStore.get(key);

    return cookieResult === null ? defaultValue : cookieResult.value;
  };

  const setValue = async (value) => await cookieStore.set(key, value);

  return [getStoredValue, setValue];
};

export default cookieHelper;
