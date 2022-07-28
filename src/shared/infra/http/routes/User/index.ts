import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { userRouter } from "./user.routes";



const allRouterUser = Router();
allRouterUser.use("/user",ensureAuthenticated,userRouter);



export {allRouterUser} 