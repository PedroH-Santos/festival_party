

import { CreateClientController } from "@modules/client/useCases/createClient/CreateClientController";
import { DeleteClientController } from "@modules/client/useCases/deleteClient/DeleteClientController";
import { FindClientByIdController } from "@modules/client/useCases/findClientById/FindClientByIdController";
import { ListClientController } from "@modules/client/useCases/listClient/ListClientController";
import {Router} from  "express";


const clientRouter = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const deleteClientController = new DeleteClientController();
const findClientByIdController = new FindClientByIdController();
clientRouter.post("/",createClientController.handle);
clientRouter.get("/",listClientController.handle);
clientRouter.get("/detail/:id",findClientByIdController.handle);

clientRouter.delete("/:id",deleteClientController.handle); 

export {clientRouter}