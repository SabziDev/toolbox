import { useEffect, useState } from "react";

const useCookie = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(defaultValue);
  const [isCookieLoading, setIsCookieLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cookieResult = await cookieStore.get(key);

      if (cookieResult !== null) setStoredValue(JSON.parse(cookieResult.value));

      setIsCookieLoading(false);
    })();
  }, [key]);

  const setValue = async (cookieOptions) => {
    const finalValue = JSON.stringify(cookieOptions.value);
    const options = { name: key, ...cookieOptions, value: finalValue };

    await cookieStore.set(options);
    setStoredValue(cookieOptions.value);
  };

  return [storedValue, setValue, isCookieLoading];
};

export default useCookie;
