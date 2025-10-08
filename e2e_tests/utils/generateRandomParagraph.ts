export function generateRandomParagraph(length: number = 100): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -';
  let result = '';

  while (result.length < length) {
    const wordLength = Math.floor(Math.random() * 8) + 2; // words between 2–10 chars
    let word = '';
    for (let i = 0; i < wordLength && result.length + word.length < length; i++) {
      word += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += word + ' ';
  }

  return result.trim().slice(0, length);
}