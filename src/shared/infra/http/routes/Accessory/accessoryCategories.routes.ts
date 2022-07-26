


import {Router} from  "express";
import { CreateCategoryAccessoryController } from "../../../../../modules/accessory/useCases/createCategoryAccessory/CreateCategoryAccessoryController";
import { DeleteCategoryAccessoryController } from "../../../../../modules/accessory/useCases/deleteCategoryAccessory/DeleteCategoryAccessoryController";
import { ListAllCategoriesAccessorysController } from "../../../../../modules/accessory/useCases/listCategoryAccessory/ListAllCategoriesAccessorysController";
import { FindByIdCategoryAccessoryController } from "@modules/accessory/useCases/findyByIdCategoryAccessory/FindByIdCategoryAccessoryController";



const categoryAccessoryRouter = Router();

const createCategoryAccessoryController = new CreateCategoryAccessoryController();
const listAllCategoriesAccessorysController = new ListAllCategoriesAccessorysController();
const deleteCategoryAccessoryController = new DeleteCategoryAccessoryController();
const findyByIdCategoryAccessoryController = new FindByIdCategoryAccessoryController();

categoryAccessoryRouter.post("/",createCategoryAccessoryController.handle);
categoryAccessoryRouter.get("/",listAllCategoriesAccessorysController.handle);
categoryAccessoryRouter.get("/detail/:id",findyByIdCategoryAccessoryController.handle);

categoryAccessoryRouter.delete("/:id",deleteCategoryAccessoryController.handle);


export {categoryAccessoryRouter}  