interface IHygraphIcon {
  icon: string;
  style?: string;
}

export const CmsIcon = ({ icon, style }: IHygraphIcon) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};
