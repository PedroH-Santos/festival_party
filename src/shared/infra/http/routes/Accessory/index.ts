import {Router} from  "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { accessoryRouter } from "./accessory.routes";
import { categoryAccessoryRouter } from "./accessoryCategories.routes";
import { imageAccessoryRouter } from "./accessoryImages.routes";
 

const allRouteraccessory = Router();
allRouteraccessory.use("/accessory",ensureAuthenticated,accessoryRouter);
allRouteraccessory.use("/accessory/category",ensureAuthenticated,categoryAccessoryRouter);
allRouteraccessory.use("/accessory/images",ensureAuthenticated,imageAccessoryRouter);


export {allRouteraccessory} 