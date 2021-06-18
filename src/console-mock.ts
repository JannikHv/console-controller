export class ConsoleMock implements Console {
  public Console: any;
  public memory: any;
  public assert(condition?: boolean, ...data: any[]): void { }
  public clear(): void { }
  public count(label?: string): void { }
  public countReset(label?: string): void { }
  public debug(...data: any[]): void { }
  public dir(item?: any, options?: any): void { }
  public dirxml(...data: any[]): void { }
  public error(...data: any[]): void { }
  public exception(message?: string, ...optionalParams: any[]): void { }
  public group(...data: any[]): void { }
  public groupCollapsed(...data: any[]): void { }
  public groupEnd(): void { }
  public info(...data: any[]): void { }
  public log(...data: any[]): void { }
  public table(tabularData?: any, properties?: string[]): void { }
  public time(label?: string): void { }
  public timeEnd(label?: string): void { }
  public timeLog(label?: string, ...data: any[]): void { }
  public timeStamp(label?: string): void { }
  public trace(...data: any[]): void { }
  public warn(...data: any[]): void { }
  public profile(): void { }
  public profileEnd(): void { }
}
