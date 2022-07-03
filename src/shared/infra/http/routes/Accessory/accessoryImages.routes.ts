
import { CreateImagesAccessoryController } from '../../../../../modules/accessory/useCases/createImagesAccessory/CreateImagesAccessoryController';
import { DeleteImageAccessoryController } from '../../../../../modules/accessory/useCases/deleteImageAccessory/DeleteImageAccessoryController';
import { ListAllImageAccessoryController } from '../../../../../modules/accessory/useCases/listImageAccessory/ListAllImageAccessoryController';

import uploadConfig from '../../../../../config/upload';
import {Router} from  "express";
import multer from "multer";


const imageAccessoryRouter = Router();

const createImagesAccessoryController = new CreateImagesAccessoryController();
const listAllImageAccessoryController = new ListAllImageAccessoryController(); 
const deleteImageAccessoryController = new DeleteImageAccessoryController();
const upload = multer(uploadConfig);

imageAccessoryRouter.post("/:Accessory_id",upload.array("images"),createImagesAccessoryController.handle);
imageAccessoryRouter.get("/",listAllImageAccessoryController.handle);
imageAccessoryRouter.delete("/:id",deleteImageAccessoryController.handle); 
 

export {imageAccessoryRouter}