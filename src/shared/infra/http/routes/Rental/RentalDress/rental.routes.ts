
import { CreateDressRentalController } from "@modules/rentals/rentalsDress/useCases/createDressRental/CreateDressRentalController";
import { DeleteDressRentalController } from "@modules/rentals/rentalsDress/useCases/deleteDressRental/DeleteDressRentalController";
import { FinishedDressRentalController } from "@modules/rentals/rentalsDress/useCases/finishedDressRental/FinishedDressRentalController";
import { ListDressRentalController } from "@modules/rentals/rentalsDress/useCases/listDressRental/ListDressRentalController";
import { ListDressRentalByIdDressController } from "@modules/rentals/rentalsDress/useCases/listDressRentalByIdDress/ListDressRentalByIdDressController";
import { FindDressRentalByIdController } from "@modules/rentals/rentalsDress/useCases/findDressRentalById/FindDressRentalByIdController";
import { ListDressRentalTodayController } from "@modules/rentals/rentalsDress/useCases/listDressRentalToday/ListDressRentalTodayController";
import { ListDressRentalFinishTodayController } from "@modules/rentals/rentalsDress/useCases/listDressRentalFinishToday/ListDressRentalFinishTodayController";


import {Router} from  "express";

 
const dressRentalRouter = Router();

const createDressRentalController = new CreateDressRentalController(); 
const listDressRentalController = new ListDressRentalController();
const deleteDressRentalController = new DeleteDressRentalController();
const finishedDressRentalController = new FinishedDressRentalController();
const listDressRentalByIdDressController = new ListDressRentalByIdDressController();
const findDressRentalByIdController = new FindDressRentalByIdController();
const listDressRentalTodayController = new ListDressRentalTodayController();
const listDressRentalFinishTodayController = new ListDressRentalFinishTodayController();

dressRentalRouter.post("/",createDressRentalController.handle);
dressRentalRouter.get("/",listDressRentalController.handle);
dressRentalRouter.get("/filter",listDressRentalByIdDressController.handle);
dressRentalRouter.get("/detail/:id",findDressRentalByIdController.handle);
dressRentalRouter.get("/today",listDressRentalTodayController.handle);
dressRentalRouter.get("/finishToday",listDressRentalFinishTodayController.handle);
dressRentalRouter.delete("/:id",deleteDressRentalController.handle);
dressRentalRouter.patch("/finished/:id",finishedDressRentalController.handle);


export {dressRentalRouter}