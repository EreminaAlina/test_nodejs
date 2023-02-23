import { object, string } from 'superstruct';
import { emailValidator } from './email.validator';

export const loginValidator = object({
    email: emailValidator,
    password: string(),
});
