import dotenv from 'dotenv';
import { Router } from 'express';
import { home_controller } from './routes_controller/home';

dotenv.config();

const secret: string = process.env.auth_secret as string;
const router: Router = Router();

//Rotas
router.get('/', home_controller.Home); 

export { router };