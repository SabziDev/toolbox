const cookieHelper = ({ key = "", defaultValue = null }) => {
  const getStoredValue = () => {
    const cookieValue = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${key}=`))
      ?.slice(key.length + 1);

    return cookieValue
      ? JSON.parse(decodeURIComponent(cookieValue))
      : defaultValue;
  };

  const setValue = ({ value, ...options }) => {
    const cookieValue = encodeURIComponent(JSON.stringify(value));

    let cookie = `${key}=${cookieValue}`;

    const optionsMap = [
      ["path", options.path],
      ["domain", options.domain],
      ["max-age", options.maxAge],
      ["samesite", options.sameSite],
      ["secure", options.secure],
    ];

    for (const [optionKey, optionValue] of optionsMap) {
      if (!optionValue) continue;

      cookie +=
        optionKey === "secure" ? "; secure" : `; ${optionKey}=${optionValue}`;
    }

    document.cookie = cookie;
  };

  return [getStoredValue, setValue];
};

export default cookieHelper;
