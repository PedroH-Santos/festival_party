

import {Router} from  "express";
import { CreateAccessoryController } from "../../../../../modules/accessory/useCases/createAccessory/CreateAccessoryController";
import { DeleteAccessoryController } from "../../../../../modules/accessory/useCases/deleteAccessory/DeleteAccessoryController";
import { ListAllAccessorysController } from "../../../../../modules/accessory/useCases/listAccessory/ListAllAccessorysController";


const accessoryRouter = Router();

const createAccessoryController = new CreateAccessoryController();
const listAllAccessorysController = new ListAllAccessorysController();
const deleteAccessoryController = new DeleteAccessoryController();
 
accessoryRouter.post("/",createAccessoryController.handle);
accessoryRouter.get("/",listAllAccessorysController.handle);
accessoryRouter.delete("/:id",deleteAccessoryController.handle);


export {accessoryRouter}