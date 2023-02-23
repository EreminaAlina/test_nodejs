import { pattern, string } from 'superstruct';

export const passwordValidator = pattern(string(), /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
