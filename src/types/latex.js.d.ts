declare module 'latex.js' {
  export class Generator {
    constructor(options?: { hyphenate?: boolean });
    parse(content: string): Promise<HTMLElement>;
  }
}
