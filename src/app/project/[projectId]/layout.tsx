export default function LayoutProject({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-portfolio-color03">
      <div className="w-[100%] flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
