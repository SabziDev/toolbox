const Icon = ({ id = "", className = "", ...restProps }) => (
  <svg className={className} {...restProps}>
    <use href={`/images/icons/icons.svg#${id}`} />
  </svg>
);

export default Icon;
