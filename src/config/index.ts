export * from './database.config';

import { DatabaseConfig, IDatabaseConfig, dbRegToken } from './database.config';

export * from './database.config';

export interface AllConfigType {
  [dbRegToken]: IDatabaseConfig;
}

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>;

export default {
  DatabaseConfig,
};
