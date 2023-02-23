import { optional, object, string, coerce, number } from 'superstruct';
import { emailValidator } from './email.validator';

const sexValidator = coerce(number(), string(), (value: string | number) => {
    if (typeof value === 'string') {
        value = parseInt(value);
    }
    if (value === 0 || value === 1) {
        return value;
    }
    throw new Error('Expected 0 or 1');
});

export const editUserValidator = object({
    email: optional(emailValidator),
    first_name: optional(string()),
    last_name: optional(string()),
    sex: optional(sexValidator),
    photo: optional(string()),
});
