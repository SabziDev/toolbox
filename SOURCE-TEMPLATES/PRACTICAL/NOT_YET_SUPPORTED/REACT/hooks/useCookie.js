import { useEffect, useState } from "react";

const useCookie = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(defaultValue);
  const [isCookieLoading, setIsCookieLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const cookie = await cookieStore.get(key);

      if (cookie !== null) setStoredValue(JSON.parse(cookie.value));

      setIsCookieLoading(false);
    })();
  }, [key]);

  const setValue = async ({ value, ...options }) => {
    const cookieValue = JSON.stringify(value);
    const cookieOptions = { name: key, ...options, value: cookieValue };

    await cookieStore.set(cookieOptions);
    setStoredValue(value);
  };

  return [storedValue, setValue, isCookieLoading];
};

export default useCookie;
