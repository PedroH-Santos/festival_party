
import { CreateImageAccessoryController } from '../../../../../modules/accessory/useCases/createImageAccessory/CreateImageAccessoryController';
import { DeleteImageAccessoryController } from '../../../../../modules/accessory/useCases/deleteImageAccessory/DeleteImageAccessoryController';
import { ListAllImageAccessoryController } from '../../../../../modules/accessory/useCases/listImageAccessory/ListAllImageAccessoryController';

import uploadConfig from '../../../../../config/upload';
import {Router} from  "express";
import multer from "multer";


const imageAccessoryRouter = Router();

const createImagesAccessoryController = new CreateImageAccessoryController();
const listAllImageAccessoryController = new ListAllImageAccessoryController(); 
const deleteImageAccessoryController = new DeleteImageAccessoryController();
const upload = multer(uploadConfig);

imageAccessoryRouter.post("/:accessory_id",upload.array("images"),createImagesAccessoryController.handle);
imageAccessoryRouter.get("/",listAllImageAccessoryController.handle);
imageAccessoryRouter.delete("/:id",deleteImageAccessoryController.handle); 
 

export {imageAccessoryRouter}