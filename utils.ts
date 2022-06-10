export const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

export const isAddressLike = (maybeAddress: string): boolean => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(maybeAddress)) {
    return false;
  } else {
    return true;
  }
};

export const isEnsLike = (maybeEns: string): boolean => {
  return maybeEns.endsWith(".eth");
};

export const formatMs = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
  const seconds = parseFloat(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
