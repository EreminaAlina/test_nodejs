import multer from 'multer';
import path from 'path';

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `static`);
    },
    filename: function (req, file, cb) {
        cb(null, `${req.params.id}-${file.originalname}`);
    },
});
export const upload = multer({
    storage,
    fileFilter: (req, file, callback) => {
        const allowedExtensions = ['.jpg', '.png'];
        if (allowedExtensions.includes(path.extname(file.originalname))) {
            callback(null, true);
            return;
        }
        callback(new Error('Not allowed extension'));
    },
    limits: { fileSize: 10 * 1024 * 1024 },
});
