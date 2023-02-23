import { DataSource } from 'typeorm';
import { User } from './entities/user';
import { init1677150261744, userSex1677172797148 } from './migrations';

export const appDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 8000,
    username: 'root',
    password: 'user',
    database: 'test_schema',
    entities: [User],
    subscribers: [],
    migrations: [init1677150261744, userSex1677172797148],
    migrationsTableName: 'migrations',
});

export const userRepository = appDataSource.getRepository(User);
