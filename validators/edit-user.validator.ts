import { optional, number, object, string } from 'superstruct';
import { emailValidator } from './email.validator';

export const editUserValidator = object({
    email: optional(emailValidator),
    first_name: optional(string()),
    last_name: optional(string()),
    sex: optional(number()),
    photo: optional(string()),
});
