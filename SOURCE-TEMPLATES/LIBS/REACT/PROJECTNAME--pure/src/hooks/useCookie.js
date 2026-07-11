/* eslint-disable unicorn/no-document-cookie */

import { useState } from "react";

const useCookie = ({ key = "", defaultValue = null }) => {
  const [storedValue, setStoredValue] = useState(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.slice(key.length + 1);

    return cookieValue
      ? JSON.parse(decodeURIComponent(cookieValue))
      : defaultValue;
  });

  const setValue = ({ value, ...options }) => {
    const cookieValue = encodeURIComponent(JSON.stringify(value));

    let cookie = `${key}=${cookieValue}`;

    const cookieOptions = [
      ["path", options.path],
      ["domain", options.domain],
      ["max-age", options.maxAge],
      ["samesite", options.sameSite],
      ["secure", options.secure],
    ];

    for (const [optionKey, optionValue] of cookieOptions) {
      if (!optionValue) continue;

      cookie +=
        optionKey === "secure" ? "; secure" : `; ${optionKey}=${optionValue}`;
    }

    document.cookie = cookie;

    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useCookie;
