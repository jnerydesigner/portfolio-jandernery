export const TransformNumberPhoneInInternational = (number: string) => {
  const nmb = number.split(" ").join("");
  const numbExt = nmb.split("-").join("");

  return "55" + numbExt;
};
