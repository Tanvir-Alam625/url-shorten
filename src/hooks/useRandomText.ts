export const useRandomText = (textLength: number): string => {
  const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let text = '';
  const countChar = 0;

  function generateText(countChar: number) {
    if (countChar <= textLength) {
      const randomIndex = Math.floor(Math.random() * char.length);
      text += char.substring(randomIndex, randomIndex + 1);
      generateText(countChar + 1);
    }
  }

  generateText(countChar);
  return text;
};
