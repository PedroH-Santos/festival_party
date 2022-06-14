import { CreateCategoryDressController } from "@modules/dress/useCases/createCategoryDress/CreateCategoryDressController";
import {Router} from  "express";


const categoryDressRouter = Router();

const createCategoryDressController = new CreateCategoryDressController();

 
categoryDressRouter.post("/",createCategoryDressController.handle);


export {categoryDressRouter}