import { CreateImagesDressController } from '@modules/dress/useCases/createImagesDress/CreateImagesDressController';
import { ListAllImageDressController } from '@modules/dress/useCases/listImageDress/ListAllImageDressController';
import { DeleteImageDressController } from '@modules/dress/useCases/deleteImageDress/DeleteImageDressController';

import uploadConfig from '../../../../../config/upload';
import {Router} from  "express";
import multer from "multer";


const imageDressRouter = Router();

const createImagesDressController = new CreateImagesDressController();
const listAllImageDressController = new ListAllImageDressController(); 
const deleteImageDressController = new DeleteImageDressController();
const upload = multer(uploadConfig);

imageDressRouter.post("/:dress_id",upload.array("images"),createImagesDressController.handle);
imageDressRouter.get("/",listAllImageDressController.handle);
imageDressRouter.delete("/:id",deleteImageDressController.handle); 


export {imageDressRouter}