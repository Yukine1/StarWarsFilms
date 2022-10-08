export const statusCheck = (prop) => {
  return prop === "unknown" || prop === "n/a" || prop === "none" ? "-" : prop;
};
