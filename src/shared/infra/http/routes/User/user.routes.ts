

import { CreateUserController } from "@modules/user/useCases/createUser/createUserController";
import { ListUserController } from "@modules/user/useCases/listUser/listUserController";
import { DeleteUserController } from "@modules/user/useCases/deleteUser/DeleteUserController";
import { FindUserByIdController } from "@modules/user/useCases/findUserById/FindUserByIdController";

import {Router} from  "express";


const userRouter = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const findUserByIdController = new FindUserByIdController();
userRouter.post("/",createUserController.handle);
userRouter.get("/",listUserController.handle);
userRouter.get("/detail/:id",findUserByIdController.handle);

userRouter.delete("/:id",deleteUserController.handle); 

export {userRouter}