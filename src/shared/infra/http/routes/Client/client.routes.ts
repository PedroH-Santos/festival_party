

import { CreateClientController } from "@modules/client/useCases/createClient/CreateClientController";
import { DeleteClientController } from "@modules/client/useCases/deleteClient/DeleteClientController";
import { FindClientByIdController } from "@modules/client/useCases/findClientById/FindClientByIdController";
import { ListClientController } from "@modules/client/useCases/listClient/ListClientController";
import { ListClientWithPaginationController } from "@modules/client/useCases/listClientWithPagination/ListClientWithPaginationController";
import {Router} from  "express";


const clientRouter = Router();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const deleteClientController = new DeleteClientController();
const findClientByIdController = new FindClientByIdController();
const listClientWithPaginationController = new ListClientWithPaginationController();
clientRouter.post("/",createClientController.handle);
clientRouter.get("/",listClientController.handle);
clientRouter.get("/pagination",listClientWithPaginationController.handle);

clientRouter.get("/detail/:id",findClientByIdController.handle);

clientRouter.delete("/:id",deleteClientController.handle); 

export {clientRouter}