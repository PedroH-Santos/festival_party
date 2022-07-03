
import { CreateDressRentalController } from "@modules/rentals/rentalsDress/useCases/createDressRental/CreateDressRentalController";
import { DeleteDressRentalController } from "@modules/rentals/rentalsDress/useCases/deleteDressRental/DeleteDressRentalController";
import { FinishedDressRentalController } from "@modules/rentals/rentalsDress/useCases/finishedDressRental/FinishedDressRentalController";
import { ListDressRentalController } from "@modules/rentals/rentalsDress/useCases/listDressRental/ListDressRentalController";
import {Router} from  "express";

 
const dressRentalRouter = Router();

const createDressRentalController = new CreateDressRentalController(); 
const listDressRentalController = new ListDressRentalController();
const deleteDressRentalController = new DeleteDressRentalController();
const finishedDressRentalController = new FinishedDressRentalController();

dressRentalRouter.post("/",createDressRentalController.handle);
dressRentalRouter.get("/",listDressRentalController.handle);
dressRentalRouter.delete("/:id",deleteDressRentalController.handle);
dressRentalRouter.patch("/finished/:id",finishedDressRentalController.handle);


export {dressRentalRouter}