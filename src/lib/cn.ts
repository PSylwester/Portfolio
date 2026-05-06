// funkcja pomocnicza do łączenia klas CSS
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
