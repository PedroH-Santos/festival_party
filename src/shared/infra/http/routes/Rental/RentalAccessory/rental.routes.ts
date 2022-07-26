
import { CreateAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/createAccessoryRental/CreateAccessoryRentalController";
import { DeleteAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/deleteAccessoryRental/DeleteAccessoryRentalController";
import { FinishedAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/finishedAccessoryRental/FinishedAccessoryRentalController";
import { ListAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRental/ListAccessoryRentalController";
import { ListAccessoryRentalByIdAccessoryController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRentalByIdDress/ListAccessoryRentalByIdAccessoryController";
import { FindAccessoryRentalByIdController } from "@modules/rentals/rentalsAccessory/useCases/findAccessoryRentalById/FindAccessoryRentalByIdController";

import {Router} from  "express";

 
const accessoryRentalRouter = Router();

const createAccessoryRentalController = new CreateAccessoryRentalController(); 
const listAccessoryRentalController = new ListAccessoryRentalController();
const deleteAccessoryRentalController = new DeleteAccessoryRentalController();
const finishedAccessoryRentalController = new FinishedAccessoryRentalController();
const listAccessoryRentalByIdAccessoryController = new ListAccessoryRentalByIdAccessoryController();
const findAccessoryRentalByIdController = new FindAccessoryRentalByIdController();


accessoryRentalRouter.post("/",createAccessoryRentalController.handle);
accessoryRentalRouter.get("/",listAccessoryRentalController.handle);
accessoryRentalRouter.get("/filter",listAccessoryRentalByIdAccessoryController.handle);
accessoryRentalRouter.get("/detail/:id",findAccessoryRentalByIdController.handle);
accessoryRentalRouter.delete("/:id",deleteAccessoryRentalController.handle);
accessoryRentalRouter.patch("/finished/:id",finishedAccessoryRentalController.handle);


export {accessoryRentalRouter}