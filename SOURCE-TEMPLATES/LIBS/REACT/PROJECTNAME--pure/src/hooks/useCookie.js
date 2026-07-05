import { useEffect, useState } from "react";

const useCookie = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      const cookieResult = await cookieStore.get(key);

      if (cookieResult !== null) setStoredValue(JSON.parse(cookieResult.value));
    })();
  }, [key]);

  const setValue = async (cookieOptions) => {
    const finalValue = JSON.stringify(cookieOptions.value);
    const options = { name: key, ...cookieOptions, value: finalValue };

    await cookieStore.set(options);
    setStoredValue(cookieOptions.value);
  };

  return [storedValue, setValue];
};

export default useCookie;
