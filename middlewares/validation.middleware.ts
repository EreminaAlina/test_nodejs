import { NextFunction, Request, Response } from 'express';
import { assert, Struct, StructError } from 'superstruct';

export const validationMiddleware =
    <T, S>(validator: Struct<T, S>) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            assert(req.body, validator);
        } catch (e) {
            if (e instanceof StructError) {
                res.status(422).send(e.toString());
            }
        }
        next();
    };
