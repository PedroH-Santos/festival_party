import {Router} from  "express";
import { dressRentalRouter } from "./rental.routes";
 

const allDressRentalRoutes = Router();
allDressRentalRoutes.use("/rental/dress",dressRentalRouter);


export {allDressRentalRoutes} 