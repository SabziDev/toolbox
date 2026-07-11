const cookieHelper = ({ key = "", defaultValue = null }) => {
  const getStoredValue = async () => {
    const cookieResult = await cookieStore.get(key);

    return JSON.parse(cookieResult?.value ?? null) ?? defaultValue;
  };

  const setValue = async (cookieOptions) => {
    const value = JSON.stringify(cookieOptions.value);
    const options = { name: key, ...cookieOptions, value };

    await cookieStore.set(options);
  };

  return [getStoredValue, setValue];
};

export default cookieHelper;
