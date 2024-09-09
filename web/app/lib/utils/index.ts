export const OPENING_EFFECTS: boolean =
  process.env.NEXT_PUBLIC_OPENING_EFFECTS === undefined
    ? true
    : process.env.NEXT_PUBLIC_OPENING_EFFECTS === "true";
