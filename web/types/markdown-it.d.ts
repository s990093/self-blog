declare module 'markdown-it' {
    export default class MarkdownIt {
      constructor();
      render(text: string): string;
    }
  }
  