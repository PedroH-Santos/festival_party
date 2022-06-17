import {Router} from  "express";
import { dressRouter } from "./dress.routes";
import { categoryDressRouter } from "./dressCategories.routes";
import { imageDressRouter } from "./dressImages.routes";


const allRouterDress = Router();
allRouterDress.use("/dress",dressRouter);
allRouterDress.use("/dress/category",categoryDressRouter);
allRouterDress.use("/dress/images",imageDressRouter);


export {allRouterDress} 