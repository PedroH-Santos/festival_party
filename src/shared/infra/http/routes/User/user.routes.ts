

import { CreateUserController } from "@modules/user/useCases/createUser/createUserController";
import { ListUserController } from "@modules/user/useCases/listUser/listUserController";
import { DeleteUserController } from "@modules/user/useCases/deleteUser/DeleteUserController";
import { FindUserByIdController } from "@modules/user/useCases/findUserById/FindUserByIdController";

import {Router} from  "express";
import { ListUserWithPaginationController } from "@modules/user/useCases/listUserWithPagination/listUserWithPaginationController";

 
const userRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const findUserByIdController = new FindUserByIdController();
const listUserWithPaginationController = new ListUserWithPaginationController();

userRouter.post("/",createUserController.handle);
userRouter.get("/",listUserController.handle);
userRouter.get("/pagination",listUserWithPaginationController.handle);
userRouter.get("/detail/:id",findUserByIdController.handle);

userRouter.delete("/:id",deleteUserController.handle); 

export {userRouter}