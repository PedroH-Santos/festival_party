


import {Router} from  "express";
import { CreateCategoryAccessoryController } from "../../../../../modules/accessory/useCases/createCategoryAccessory/CreateCategoryAccessoryController";
import { DeleteCategoryAccessoryController } from "../../../../../modules/accessory/useCases/deleteCategoryAccessory/DeleteCategoryAccessoryController";
import { ListAllCategoriesAccessorysController } from "../../../../../modules/accessory/useCases/listCategoryAccessory/ListAllCategoriesAccessorysController";



const categoryAccessoryRouter = Router();

const createCategoryAccessoryController = new CreateCategoryAccessoryController();
const listAllCategoriesAccessorysController = new ListAllCategoriesAccessorysController();
const deleteCategoryAccessoryController = new DeleteCategoryAccessoryController();

categoryAccessoryRouter.post("/",createCategoryAccessoryController.handle);
categoryAccessoryRouter.get("/",listAllCategoriesAccessorysController.handle);
categoryAccessoryRouter.delete("/:id",deleteCategoryAccessoryController.handle);


export {categoryAccessoryRouter}  