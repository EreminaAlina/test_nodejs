import { object, string } from 'superstruct';
import { emailValidator } from './email.validator';
import { passwordValidator } from './password.validator';

export const registerValidator = object({
    first_name: string(),
    email: emailValidator,
    password: passwordValidator,
});
