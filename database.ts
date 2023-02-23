import { DataSource } from 'typeorm';
import { User } from './entities/user';

export const appDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 8000,
    username: 'root',
    password: 'user',
    database: 'test_schema',
    synchronize: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

export const userRepository = appDataSource.getRepository(User);
