import { CreateCategoryDressController } from "@modules/dress/useCases/createCategoryDress/CreateCategoryDressController";
import { ListAllCategoriesDressesController } from "@modules/dress/useCases/listCategoryDress/ListAllCategoriesDressesController";
import { DeleteCategoryDressController } from "@modules/dress/useCases/deleteCategoryDress/DeleteCategoryDressController";
import { FindByIdCategoryDressController } from "@modules/dress/useCases/findyByIdCategoryDress/FindByIdCategoryDressController";


import {Router} from  "express";


const categoryDressRouter = Router();

const createCategoryDressController = new CreateCategoryDressController();
const listAllCategoriesDressesController = new ListAllCategoriesDressesController();
const deleteCategoryDressController = new DeleteCategoryDressController();
const findyByIdCategoryDressController = new FindByIdCategoryDressController();
categoryDressRouter.post("/",createCategoryDressController.handle);
categoryDressRouter.get("/",listAllCategoriesDressesController.handle);
categoryDressRouter.get("/detail/:id",findyByIdCategoryDressController.handle);
categoryDressRouter.delete("/:id",deleteCategoryDressController.handle);


export {categoryDressRouter} 