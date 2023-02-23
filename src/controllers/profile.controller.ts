import { userRepository } from '../database';
import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';

//редактирование пользователя по id
export const editUserById = async ({ body, params, file }: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(params.id);

    try {
        const user = await userRepository.findOneBy({ id: userId });
        if (!user) {
            res.status(404).send('Not found');
            return;
        }

        if (file) {
            if (user.photo) {
                await fs.unlink(`${file.destination}/${user.photo}`);
            }
            user.photo = `${userId}-${file.originalname}`;
        }
        Object.assign(user, body);
        await userRepository.save(user);
        res.status(200).send();
    } catch (e) {
        next(e);
    }
};

//получение пользователя по id
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await userRepository.findOneBy({ id: userId });
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

//получение всех пользователей с пагинацией по 10 шт
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(<string>req.query.page);
    try {
        const users = await userRepository.find({
            skip: page * 10,
            take: 10,
            order: { registration_date: 'ASC' },
        });
        res.status(200).send(users);
    } catch (e) {
        next(e);
    }
};
