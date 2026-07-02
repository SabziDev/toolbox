const NumInput = ({
  name = "",
  value = "",
  placeholder = "",
  className = "",
  ...restProps
}) => {
  return (
    <input
      type="number"
      name={name}
      value={value}
      placeholder={placeholder}
      onWheel={(e) => e.target.blur()}
      className={className}
      {...restProps}
    />
  );
};

export default NumInput;
