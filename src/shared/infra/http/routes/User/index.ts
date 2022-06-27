import {Router} from  "express";
import { userRouter } from "./user.routes";



const allRouterUser = Router();
allRouterUser.use("/user",userRouter);



export {allRouterUser} 