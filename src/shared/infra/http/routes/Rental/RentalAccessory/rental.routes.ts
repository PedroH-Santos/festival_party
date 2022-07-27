
import { CreateAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/createAccessoryRental/CreateAccessoryRentalController";
import { DeleteAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/deleteAccessoryRental/DeleteAccessoryRentalController";
import { FinishedAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/finishedAccessoryRental/FinishedAccessoryRentalController";
import { ListAccessoryRentalController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRental/ListAccessoryRentalController";
import { ListAccessoryRentalByIdAccessoryController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRentalByIdAccessory/ListAccessoryRentalByIdAccessoryController";
import { FindAccessoryRentalByIdController } from "@modules/rentals/rentalsAccessory/useCases/findAccessoryRentalById/FindAccessoryRentalByIdController";
import { ListAccessoryRentalTodayController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRentalToday/ListAccessoryRentalTodayController";
import { ListAccessoryRentalFinishTodayController } from "@modules/rentals/rentalsAccessory/useCases/listAccessoryRentalFinishToday/ListAccessoryRentalFinishTodayController";
 
import {Router} from  "express";

 
const accessoryRentalRouter = Router();

const createAccessoryRentalController = new CreateAccessoryRentalController(); 
const listAccessoryRentalController = new ListAccessoryRentalController();
const deleteAccessoryRentalController = new DeleteAccessoryRentalController();
const finishedAccessoryRentalController = new FinishedAccessoryRentalController();
const listAccessoryRentalByIdAccessoryController = new ListAccessoryRentalByIdAccessoryController();
const findAccessoryRentalByIdController = new FindAccessoryRentalByIdController();
const listAccessoryRentalTodayController = new ListAccessoryRentalTodayController();
const listAccessoryRentalFinishTodayController = new ListAccessoryRentalFinishTodayController();


accessoryRentalRouter.post("/",createAccessoryRentalController.handle);
accessoryRentalRouter.get("/",listAccessoryRentalController.handle);
accessoryRentalRouter.get("/filter",listAccessoryRentalByIdAccessoryController.handle);
accessoryRentalRouter.get("/detail/:id",findAccessoryRentalByIdController.handle);
accessoryRentalRouter.get("/today",listAccessoryRentalTodayController.handle);
accessoryRentalRouter.get("/finishToday",listAccessoryRentalFinishTodayController.handle);
accessoryRentalRouter.delete("/:id",deleteAccessoryRentalController.handle);
accessoryRentalRouter.patch("/finished/:id",finishedAccessoryRentalController.handle);


export {accessoryRentalRouter}