import { object, string } from 'superstruct';
import { emailValidator } from './email.validator';

export const registerValidator = object({
    first_name: string(),
    email: emailValidator,
    password: string(),
});
