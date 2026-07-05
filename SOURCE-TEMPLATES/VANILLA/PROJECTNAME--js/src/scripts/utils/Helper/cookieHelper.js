const cookieHelper = ({ key = "", defaultValue = null }) => {
  const getStoredValue = async () => {
    const cookieResult = await cookieStore.get(key);

    return cookieResult === null
      ? defaultValue
      : JSON.parse(cookieResult.value);
  };

  const setValue = async (cookieOptions) => {
    const value = JSON.stringify(cookieOptions.value);
    const options = { name: key, ...cookieOptions, value };

    await cookieStore.set(options);
  };

  return [getStoredValue, setValue];
};

export default cookieHelper;
