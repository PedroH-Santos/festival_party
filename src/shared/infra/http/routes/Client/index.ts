import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { clientRouter } from "./client.routes";



const allRouterClient = Router();
allRouterClient.use("/client",ensureAuthenticated,clientRouter);



export {allRouterClient} 