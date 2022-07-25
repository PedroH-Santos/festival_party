import {Router} from  "express";
import { clientRouter } from "./client.routes";



const allRouterClient = Router();
allRouterClient.use("/client",clientRouter);



export {allRouterClient} 