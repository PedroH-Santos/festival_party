
import { CreateRentalController } from "@modules/rental/useCases/createRental/CreateRentalController";
import { DeleteRentalController } from "@modules/rental/useCases/deleteRental/DeleteRentalController";
import { ChangeStatusRentalController } from "@modules/rental/useCases/changeStatusRental/ChangeStatusRentalController";
import { ListRentalController } from "@modules/rental/useCases/listRental/ListRentalController";
import { ListRentalByIdProductController } from "@modules/rental/useCases/listRentalByIdProduct/ListRentalByIdProductController";
import { FindRentalByIdController } from "@modules/rental/useCases/findRentalById/FindRentalByIdController";
import { ListRentalTodayController } from "@modules/rental/useCases/listRentalToday/ListRentalTodayController";
import { ListRentalFinishTodayController } from "@modules/rental/useCases/listRentalFinishToday/ListRentalFinishTodayController";


import {Router} from  "express";
import { ListRentalWithPaginationController } from "@modules/rental/useCases/listRentalWithPagination/ListRentalWithPaginationController";

 
const rentalRouter = Router();

const createRentalController = new CreateRentalController(); 
const listRentalController = new ListRentalController();
const deleteRentalController = new DeleteRentalController();
const changeStatusRentalController = new ChangeStatusRentalController();
const listRentalByIdProductController = new ListRentalByIdProductController();
const findRentalByIdController = new FindRentalByIdController();
const listRentalTodayController = new ListRentalTodayController();
const listRentalFinishTodayController = new ListRentalFinishTodayController();
const listRentalWithPaginationController = new ListRentalWithPaginationController();

rentalRouter.post("/",createRentalController.handle);
rentalRouter.get("/",listRentalController.handle);
rentalRouter.get("/pagination",listRentalWithPaginationController.handle);

rentalRouter.get("/filter",listRentalByIdProductController.handle);
rentalRouter.get("/detail/:id",findRentalByIdController.handle);
rentalRouter.get("/today",listRentalTodayController.handle);
rentalRouter.get("/finishToday",listRentalFinishTodayController.handle);
rentalRouter.delete("/:id",deleteRentalController.handle);
rentalRouter.patch("/changeStatus/:id",changeStatusRentalController.handle);


export {rentalRouter}