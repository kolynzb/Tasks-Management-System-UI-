export const TextCropper = (text: string, limit: number): string => {
  if (text) {
    const textSize: number = text.length;

    if (textSize > limit) {
      return text?.slice(0, limit - 3) + "...";
    } else {
      return text;
    }
  }else{
    return "Network Error (refresh to clear)"
  }
};
