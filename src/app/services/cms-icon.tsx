interface IHygraphIcon {
  icon: string;
  style?: React.CSSProperties;
  fontColor?: string;
  [key: string]: any;
}

export const CmsIcon = ({
  icon,
  style,
  fontColor,
  ...restProps
}: IHygraphIcon) => {
  return (
    <div
      style={style}
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};
