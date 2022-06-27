
import {Router} from  "express";
import { CreateDressRentalController } from "../../../../../modules/rentals/useCases/createDressRental/CreateDressRentalController";


const dressRentalRouter = Router();

const createDressRentalController = new CreateDressRentalController();

 
dressRentalRouter.post("/",createDressRentalController.handle);



export {dressRentalRouter}