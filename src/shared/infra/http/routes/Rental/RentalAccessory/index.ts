import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import {Router} from  "express";
import { accessoryRentalRouter } from "./rental.routes";
 

const allAccessoryRentalRoutes = Router();
allAccessoryRentalRoutes.use("/rental/accessory",ensureAuthenticated,accessoryRentalRouter);


export {allAccessoryRentalRoutes} 