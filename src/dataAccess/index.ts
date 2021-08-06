import mongoose from 'mongoose';

import config from '../configs/database';

interface IMongooseOptions {
  [key: string]: boolean;
}

class MongoooseConnection {
  private static readonly _uri: string = config.DB_URI;

  private static readonly _options: IMongooseOptions = config.DB_OPTIONS;

  constructor() {}

  public static async connect() {
    try {
      await mongoose.connect(this._uri, this._options);
      console.log(`Successfully connected to the database`);
    } catch (error) {
      console.log(`Failed to connecting to the database, error: ${error}`);
    }
  }
}

export = MongoooseConnection;
