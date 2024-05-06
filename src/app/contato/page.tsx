import MainContact from "./main";

export default function Contact() {
  return (
    <>
      <div className="w-[100%] tablet:h-[85vh] laptop:h-[90vh] laptop:w-[100%] flex justify-center flex-col items-center p-2 laptop:p-10">
        <MainContact />
      </div>
    </>
  );
}
