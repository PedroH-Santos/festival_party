import {Router} from  "express";
import { accessoryRouter } from "./accessory.routes";
import { categoryAccessoryRouter } from "./accessoryCategories.routes";
import { imageAccessoryRouter } from "./accessoryImages.routes";
 

const allRouteraccessory = Router();
allRouteraccessory.use("/accessory",accessoryRouter);
allRouteraccessory.use("/accessory/category",categoryAccessoryRouter);
allRouteraccessory.use("/accessory/images",imageAccessoryRouter);


export {allRouteraccessory} 