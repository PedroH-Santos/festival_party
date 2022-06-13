import { CreateDressController } from "@modules/dress/useCases/createDress/CreateDressController";
import {Router} from  "express";


const dressRouter = Router();

const createDressController = new CreateDressController();

 
dressRouter.post("/",createDressController.handle);


export {dressRouter}