import {Router} from  "express";
import { transactionRoutes } from "./transaction.routes";
 

const allTransactionRoutes = Router();
allTransactionRoutes.use("/transaction",transactionRoutes);


export {allTransactionRoutes} 