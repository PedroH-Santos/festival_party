import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { productRouter } from "./product.routes";
import { categoryProductRouter } from "./productCategories.routes";
import {imageProductRouter } from "./productImages.routes";

const allRouterProduct = Router();
allRouterProduct.use("/product",ensureAuthenticated,productRouter);
allRouterProduct.use("/product/category",ensureAuthenticated,categoryProductRouter);
allRouterProduct.use("/product/images",ensureAuthenticated,imageProductRouter);


export {allRouterProduct} 