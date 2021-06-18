import { ConsoleMock } from './console-mock';

export class ConsoleController {
  private static originalConsole: Console = window.console;

  public static disable(): void {
    window.console = new ConsoleMock();
  }

  public static enable(): void {
    window.console = this.originalConsole;
  }
}