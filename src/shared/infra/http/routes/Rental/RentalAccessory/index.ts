import {Router} from  "express";
import { accessoryRentalRouter } from "./rental.routes";
 

const allAccessoryRentalRoutes = Router();
allAccessoryRentalRoutes.use("/rental/accessory",accessoryRentalRouter);


export {allAccessoryRentalRoutes} 