import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Invalid token');
    }
    try {
        console.log(jwt.verify(token, process.env['JWT_SECRET']));
        next();
    } catch (e) {
        return res.status(401).send('JWT EXPIRED');
    }
};
