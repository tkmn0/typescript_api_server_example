import * as Express from 'express';
import UserRouter from './UserRouter';

const Router = Express.Router();
Router.use('/user', UserRouter);
export default Router;
