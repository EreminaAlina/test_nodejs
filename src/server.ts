import { config } from 'dotenv';
config();

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { appDataSource } from './database';
import loginRouter from './routes/user.router';
import profileRouter from './routes/profile.router';

const app = express();

const initializeServer = async () => {
    await appDataSource.initialize();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(`static`));
    app.use(cors());
    app.use('/user', loginRouter);
    app.use('/', profileRouter);
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send(error);
        next(error);
    });

    const HTTP_PORT = 1234;
    app.listen(HTTP_PORT, () => {
        console.log('Server running on port number ' + HTTP_PORT);
    });
};

initializeServer();
