import express from 'express';
import { editUserById, getUserById, getAllUsers } from '../controllers/profile.controller';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { editUserValidator } from '../validators/edit-user.validator';
import { authMiddleware } from '../middlewares/auth.middleware';
import { upload } from '../utils/multer';

const router = express.Router();

router.put(
    '/profile/:id',
    authMiddleware,
    validationMiddleware(editUserValidator),
    upload.single('photo'),
    editUserById
);
router.get('/profile/:id', authMiddleware, getUserById);
router.get('/profiles', authMiddleware, getAllUsers);

export default router;
