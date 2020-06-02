import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/uploads';

import UserController from '../controller/UserController';
import UserAvatarController from '@modules/users/infra/http/controller/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update
);

export default usersRouter;
