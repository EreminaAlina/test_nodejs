import express from 'express';
import { login, signUp } from '../controllers/user.controller';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { loginValidator } from '../validators/login.validator';
import { registerValidator } from '../validators/register.validator';

const router = express.Router();

router.post('/register', validationMiddleware(registerValidator), signUp);
router.post('/login', validationMiddleware(loginValidator), login);

export default router;
