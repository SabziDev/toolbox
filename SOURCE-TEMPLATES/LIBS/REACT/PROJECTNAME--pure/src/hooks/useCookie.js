import { useEffect, useState } from "react";

const useCookie = ({ key = "", defaultValue = "" }) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      const cookieResult = JSON.parse(await cookieStore.get(key));

      if (cookieResult !== null) setStoredValue(cookieResult.value);
    })();
  }, [key]);

  const setValue = async (cookieOptions = {}) => {
    const finalValue = JSON.stringify(cookieOptions.value);
    const options = { name: key, value: finalValue, ...cookieOptions };

    await cookieStore.set(options);
    setStoredValue(cookieOptions.value);
  };

  return [storedValue, setValue];
};

export default useCookie;
