export const TransformNumberPhoneInInternational = (number: string) => {
  const nmb = number.split(" ").join("");
  const numbExt = nmb.split("-").join("");
  console.log(numbExt);

  return "55" + numbExt;
};
