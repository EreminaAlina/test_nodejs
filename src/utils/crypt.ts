import bcrypt from 'bcrypt';

export const hash = async (data: string) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt);
};

export const compare = (data: string, encrypted: string) => {
    return bcrypt.compare(data, encrypted);
};
