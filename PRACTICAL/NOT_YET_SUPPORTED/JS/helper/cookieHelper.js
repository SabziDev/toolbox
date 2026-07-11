const cookieHelper = ({ key = "", defaultValue = null }) => {
  const getStoredValue = async () => {
    const cookie = await cookieStore.get(key);

    return JSON.parse(cookie?.value ?? null) ?? defaultValue;
  };

  const setValue = async ({ value, ...options }) => {
    const value = JSON.stringify(value);
    const cookieOptions = { name: key, ...options, value };

    await cookieStore.set(cookieOptions);
  };

  return [getStoredValue, setValue];
};

export default cookieHelper;
