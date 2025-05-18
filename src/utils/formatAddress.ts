type Params = {
  nPrefix?: number;
  nSuffix?: number;
  separator?: "braces" | "brackets" | "parenthesis";
};

const opening = {
  braces: "{",
  brackets: "[",
  parenthesis: "(",
};

const closing = {
  braces: "}",
  brackets: "]",
  parenthesis: ")",
};

export function truncate(
  address: string | undefined | null,
  { nPrefix, nSuffix, separator }: Params = {}
) {
  if (!address) return "Invalid Address";
  // const match = address.match(/^(0x[a-zA-Z0-9])[a-zA-Z0-9]+([a-zA-Z0-9])$/);
  const nTotalIsLongerThanAddress =
    (nPrefix || 0) + (nSuffix || 0) > address.length;

  return !nTotalIsLongerThanAddress
    ? `${address.slice(0, 2 + (nPrefix || 4))}${
        separator ? opening[separator] : ""
      }…${separator ? closing[separator] : ""}${address.slice(
        address.length - (nSuffix || 4)
      )}`
    : address;
}
