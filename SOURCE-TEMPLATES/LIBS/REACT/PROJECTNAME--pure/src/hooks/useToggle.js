import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};

export default useToggle;
