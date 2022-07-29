import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import {Router} from  "express";
import { rentalRouter } from "./rental.routes";
 

const allRentalRoutes = Router();
allRentalRoutes.use("/rental",ensureAuthenticated,rentalRouter);


export {allRentalRoutes} 