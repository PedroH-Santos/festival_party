import { CreateImagesProductController } from '@modules/product/useCases/createImagesProduct/CreateImagesProductController';
import { ListAllImageProductController } from '@modules/product/useCases/listImageProduct/ListAllImageProductController';
import { DeleteImageProductController } from '@modules/product/useCases/deleteImageProduct/DeleteImageProductController';

import uploadConfig from '../../../../../config/upload';
import {Router} from  "express";
import multer from "multer";


const imageProductRouter = Router();

const createImagesProductController = new CreateImagesProductController();
const listAllImageProductController = new ListAllImageProductController(); 
const deleteImageProductController = new DeleteImageProductController();
const upload = multer(uploadConfig);

imageProductRouter.post("/:product_id",upload.array("images"),createImagesProductController.handle);
imageProductRouter.get("/",listAllImageProductController.handle);
imageProductRouter.delete("/:id",deleteImageProductController.handle); 


export {imageProductRouter}