import { CreateDressController } from "@modules/dress/useCases/createDress/CreateDressController";
import { ListAllDressesController } from "@modules/dress/useCases/listDress/ListAllDressesController";
import { DeleteDressController } from "@modules/dress/useCases/deleteDress/DeleteDressController";
import { FindDressByIdController } from "@modules/dress/useCases/findDressById/FindDressByIdController";

import {Router} from  "express";


const dressRouter = Router();

const createDressController = new CreateDressController();
const listAllDressesController = new ListAllDressesController();
const findDressByIdController = new FindDressByIdController();
const deleteDressController = new DeleteDressController();
 
dressRouter.post("/",createDressController.handle);
dressRouter.get("/",listAllDressesController.handle);
dressRouter.get("/detail/:id",findDressByIdController.handle);
dressRouter.delete("/:id",deleteDressController.handle);


export {dressRouter}