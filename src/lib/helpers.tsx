export const NumberFm = (n: number): string =>
  Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(n);
