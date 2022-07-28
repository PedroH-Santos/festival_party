
import { AuthenticateUserController } from "@modules/user/useCases/authenticateUser/AuthenticateUserController";
import {Router} from  "express";


const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRouter.post("/session",authenticateUserController.handle);



export {authenticateRouter}