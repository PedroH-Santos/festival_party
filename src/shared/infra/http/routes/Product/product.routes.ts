import { CreateProductController } from "@modules/product/useCases/createProduct/CreateProductController";
import { ListAllProductsController } from "@modules/product/useCases/listProducts/ListAllProductsController";
import { DeleteProductController } from "@modules/product/useCases/deleteProduct/DeleteProductController";
import { FindProductByIdController } from "@modules/product/useCases/findProductById/FindProductByIdController";

import {Router} from  "express";
import { ListAllProductsWithPaginationController } from "@modules/product/useCases/listProductsWithPagination/ListAllProductsWithPaginationController";


const productRouter = Router();

const createProductController = new CreateProductController();
const listAllProductesController = new ListAllProductsController();
const findProductByIdController = new FindProductByIdController();
const deleteProductController = new DeleteProductController();
const listAllProductsWithPaginationController = new ListAllProductsWithPaginationController(); 


productRouter.post("/",createProductController.handle);
productRouter.get("/",listAllProductesController.handle);
productRouter.get("/pagination",listAllProductsWithPaginationController.handle);
productRouter.get("/detail/:id",findProductByIdController.handle);
productRouter.delete("/:id",deleteProductController.handle);


export {productRouter}