import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { dressRouter } from "./dress.routes";
import { categoryDressRouter } from "./dressCategories.routes";
import { imageDressRouter } from "./dressImages.routes";


const allRouterDress = Router();
allRouterDress.use("/dress",ensureAuthenticated,dressRouter);
allRouterDress.use("/dress/category",ensureAuthenticated,categoryDressRouter);
allRouterDress.use("/dress/images",ensureAuthenticated,imageDressRouter);


export {allRouterDress} 