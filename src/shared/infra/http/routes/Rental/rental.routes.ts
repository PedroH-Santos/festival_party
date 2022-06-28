
import { ListDressRentalController } from "@modules/rentals/useCases/listDressRental/ListDressRentalController";
import {Router} from  "express";
import { CreateDressRentalController } from "../../../../../modules/rentals/useCases/createDressRental/CreateDressRentalController";


const dressRentalRouter = Router();

const createDressRentalController = new CreateDressRentalController();
const listDressRentalController = new ListDressRentalController();
 
dressRentalRouter.post("/",createDressRentalController.handle);
dressRentalRouter.get("/",listDressRentalController.handle);



export {dressRentalRouter}