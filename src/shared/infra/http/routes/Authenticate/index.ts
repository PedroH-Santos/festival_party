import {Router} from  "express";
import { authenticateRouter } from "./authenticate.routes";



const allRouterAuthenticate = Router();
allRouterAuthenticate.use(authenticateRouter);



export {allRouterAuthenticate} 