import { pattern, string } from 'superstruct';

export const emailValidator = pattern(string(), /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
