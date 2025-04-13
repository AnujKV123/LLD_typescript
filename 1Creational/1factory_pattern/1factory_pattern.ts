

// blog: https://refactoring.guru/design-patterns/factory-method
// blog + code: https://medium.com/@diegomottadev/factory-method-pattern-implementation-using-typescript-and-node-js-6ac075967f22



// Define Logger Interfaces and Classes
// ILogger.ts
// export interface ILogger {
//     log(message: string): void;
// }

interface ILogger {
    log(message: string): void;
}

// ConsoleLogger.ts
// import { ILogger } from "./ILogger";

export class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(`[Console] ${message}`);
    }
}

// FileLogger.ts
// import { ILogger } from "./ILogger";
import * as fs from "fs";

export class FileLogger implements ILogger {
    private readonly filePath: string;
    
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    
    log(message: string): void {
        fs.appendFileSync(this.filePath, `[File] ${message}\n`);
    }
}

// Create a Logger Factory
// LoggerFactory.ts
// import { ILogger } from "./ILogger";
// import { ConsoleLogger } from "./ConsoleLogger";
// import { FileLogger } from "./FileLogger";

export enum LoggerType {
    Console,
    File
}

export class LoggerFactory {
    static createLogger(type: LoggerType, options?: any): ILogger {
        switch (type) {
            case LoggerType.Console:
                return new ConsoleLogger();
            case LoggerType.File:
                if (options && options.filePath) {
                    return new FileLogger(options.filePath);
                } else {
                    throw new Error("File path is missing for FileLogger.");
                }
            default:
                throw new Error("Invalid logger type.");
        }
    }
}


// Using the Factory
// index.ts
// import { LoggerFactory, LoggerType } from "./LoggerFactory";

const consoleLogger = LoggerFactory.createLogger(LoggerType.Console);
consoleLogger.log("This is a console log.");

const fileLogger = LoggerFactory.createLogger(LoggerType.File, { filePath: "logs.txt" });
fileLogger.log("This is a file log.");
const fileLogger2 = LoggerFactory.createLogger(LoggerType.File);
fileLogger2.log("This is a file log.");