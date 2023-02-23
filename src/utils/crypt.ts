import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hash = async (data: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(data, salt);
};

export const compare = (data: string, encrypted: string) => {
    return bcrypt.compare(data, encrypted);
};
