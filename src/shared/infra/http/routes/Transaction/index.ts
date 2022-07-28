import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { transactionRoutes } from "./transaction.routes";
 

const allTransactionRoutes = Router();
allTransactionRoutes.use("/transaction",ensureAuthenticated,transactionRoutes);


export {allTransactionRoutes} 