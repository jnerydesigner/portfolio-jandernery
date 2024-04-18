interface IHygraphIcon {
  icon: string;
}

export const CmsIcon = ({ icon }: IHygraphIcon) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};
