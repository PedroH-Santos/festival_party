
import { CreateTransactionController } from "@modules/transaction/useCases/createTransaction/CreateTransactionController";
import { ListTransactionController } from "@modules/transaction/useCases/listTransaction/ListTransactionController";
import { DeleteTransactionController } from "@modules/transaction/useCases/deleteTransaction/DeleteTransactionController";
import { FindTransactionByIdController } from "@modules/transaction/useCases/findTransactionById/FindTransactionByIdController";

import {Router} from  "express";
import { ListTransactionWithPaginationController } from "@modules/transaction/useCases/listTransactionWithPagination/ListTransactionWithPaginationController";


const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionController = new ListTransactionController();  
const deleteTransactionController = new DeleteTransactionController();
const findTransactionByIdController = new FindTransactionByIdController();

const listTransactionWithPaginationController = new ListTransactionWithPaginationController();

transactionRoutes.post("/",createTransactionController.handle);
transactionRoutes.get("/",listTransactionController.handle);
transactionRoutes.get("/pagination",listTransactionWithPaginationController.handle);
transactionRoutes.get("/detail/:id",findTransactionByIdController.handle);
transactionRoutes.delete("/:id",deleteTransactionController.handle); 



export {transactionRoutes}