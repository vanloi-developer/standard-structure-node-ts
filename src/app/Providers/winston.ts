import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config({});

interface ILogger {
  logger: winston.Logger;
}

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'white',
  http: 'magenta',
  debug: 'green',
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const format = winston.format.combine(
  winston.format.timestamp({
    format: `DD-MM-YYYY HH:mm:ss:ms`,
  }),

  winston.format.colorize({ all: true }),

  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transports = [
  new winston.transports.Console(),

  new winston.transports.File({
    filename: './storage/logs/error.log',
    level: 'error',
  }),

  new winston.transports.File({
    filename: './storage/logs/debug.log',
    level: 'debug',
  }),

  new winston.transports.File({
    filename: './storage/logs/warn.log',
    level: 'warn',
  }),

  new winston.transports.File({
    filename: './storage/logs/info.log',
    level: 'info',
  }),
];

class Logger implements ILogger {
  public logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: level(),
      levels,
      format,
      transports,
    });
    winston.addColors(colors);
  }

  public stream = {
    write: (message: string) => {
      this.logger.http(message.substring(0, message.lastIndexOf('\n')));
    },
  };
}

Object.seal(Logger);
export = new Logger();
