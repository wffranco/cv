export function wrapper(input: string | string[]): string[] {
  return typeof input === 'string' ? [input] : input;
}
