interface IHygraphIcon {
  icon: string;
  style?: React.CSSProperties;
  fontColor?: string;
  [key: string]: any;
}

export const CmsIcon = ({
  icon,
  style = {},
  fontColor,
  ...restProps
}: IHygraphIcon) => {
  const defaultStyle: React.CSSProperties = {
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
    padding: "8px",
    display: "inline-block",
    backgroundColor: "white",
    ...style,
  };

  return (
    <div
      {...restProps}
      style={defaultStyle}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};
