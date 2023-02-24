import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './entities/user';
import { init1677150261744, userSex1677172797148 } from './migrations';

const options: DataSourceOptions = {
    type: 'mysql',
    url: process.env.DATABASE_URL,
    entities: [User],
    subscribers: [],
    migrations: [init1677150261744, userSex1677172797148],
    migrationsTableName: 'migrations',
};

export const appDataSource = new DataSource(options);

export const userRepository = appDataSource.getRepository(User);
