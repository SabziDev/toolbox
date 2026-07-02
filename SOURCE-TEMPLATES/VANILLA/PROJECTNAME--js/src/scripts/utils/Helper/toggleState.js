/* eslint-disable unicorn/consistent-boolean-name */

const toggleBoolean = (defaultValue) => {
  let value = defaultValue;

  const getValue = () => value;
  const toggleValue = () => (value = !value);

  return [getValue, toggleValue];
};

export default toggleBoolean;
