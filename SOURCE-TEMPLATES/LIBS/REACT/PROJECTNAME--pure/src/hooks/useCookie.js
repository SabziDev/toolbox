import { useEffect, useState } from "react";

const useCookie = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      const cookieResult = await cookieStore.get(key);

      if (cookieResult !== null) setStoredValue(cookieResult.value);
    })();
  }, [key]);

  const setValue = async (value) => {
    await cookieStore.set(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useCookie;
