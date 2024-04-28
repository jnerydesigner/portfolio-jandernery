interface IHygraphIcon {
  icon: string;
  style?: string;
  fontColor?: string;
}

export const CmsIcon = ({ icon, style, fontColor }: IHygraphIcon) => {
  if (fontColor !== undefined) {
    console.log(fontColor);
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
        className={`text-[${fontColor}] drop-shadow-total_opacity`}
      />
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};
