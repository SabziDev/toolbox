import clsx from "clsx";

import Icon from "../Icon/Icon";

const Btn = ({
  children,
  svgId = "",
  svgClassName = "",
  className = "",
  ...restProps
}) => {
  return (
    <button type="button" className={clsx(["", className])} {...restProps}>
      <Icon
        id={svgId}
        // TODO svg Size
        className={clsx(["size-SIZE", svgClassName])}
      />
      {children}
    </button>
  );
};

export default Btn;
