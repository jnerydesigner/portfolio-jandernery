import MainAbout from "./main";

export default function Sobre() {
  return (
    <>
      <div className="w-[100%] tablet:h-[85vh] laptop:h-[auto] laptop:w-[100%] flex justify-center flex-col items-center p-2 laptop:p-10">
        <MainAbout />
      </div>
    </>
  );
}
