import { userRepository } from '../database';
import { User } from '../entities/user';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare, hash } from '../utils/crypt';

// создание пользователя
export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) return res.sendStatus(400);
    const { first_name, email, password } = req.body;
    try {
        const user = new User();
        user.first_name = first_name;
        user.email = email;
        user.password = await hash(password);
        user.registration_date = new Date();
        user.access_token = jwt.sign({ userId: user.id }, process.env['JWT_SECRET'], { expiresIn: '1d' });
        await userRepository.insert(user);
        res.status(200).send(user.access_token);
    } catch (e) {
        next(e);
    }
};

//вход существующего пользователя
export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        const user = await userRepository.findOneBy({ email });
        if (!user) {
            return res.status(401).send();
        }
        const isValidPass = await compare(password, user.password);
        if (isValidPass) {
            user.access_token = jwt.sign({ userId: user.id }, process.env['JWT_SECRET'], { expiresIn: '1d' });
            return res.status(200).send(user.access_token);
        }
        return res.status(401).send();
    } catch (e) {
        next(e);
    }
};
