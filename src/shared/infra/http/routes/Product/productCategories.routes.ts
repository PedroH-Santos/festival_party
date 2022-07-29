import { CreateCategoryProductController } from "@modules/product/useCases/createCategoryProduct/CreateCategoryProductController";
import { ListAllCategoriesProductsController } from "@modules/product/useCases/listCategoryProduct/ListAllCategoriesProductsController";
import { DeleteCategoryProductController } from "@modules/product/useCases/deleteCategoryProduct/DeleteCategoryProductController";
import { FindByIdCategoryProductController } from "@modules/product/useCases/findyByIdCategoryProduct/FindByIdCategoryProductController";


import {Router} from  "express";


const categoryProductRouter = Router();

const createCategoryProductController = new CreateCategoryProductController();
const listAllCategoriesProductesController = new ListAllCategoriesProductsController();
const deleteCategoryProductController = new DeleteCategoryProductController();
const findyByIdCategoryProductController = new FindByIdCategoryProductController();
categoryProductRouter.post("/",createCategoryProductController.handle);
categoryProductRouter.get("/",listAllCategoriesProductesController.handle);
categoryProductRouter.get("/detail/:id",findyByIdCategoryProductController.handle);
categoryProductRouter.delete("/:id",deleteCategoryProductController.handle);


export {categoryProductRouter} 