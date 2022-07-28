import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import {Router} from  "express";
import { dressRentalRouter } from "./rental.routes";
 

const allDressRentalRoutes = Router();
allDressRentalRoutes.use("/rental/dress",ensureAuthenticated,dressRentalRouter);


export {allDressRentalRoutes} 