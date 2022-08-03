import "reflect-metadata"; 
import "dotenv/config"; 
import  express,{ NextFunction, Request,Response} from "express";
import "express-async-errors";
import { router } from "./routes";

import  createConnection  from "@shared/infra/typeorm";  
import "@shared/containers";
import { AppError } from "@shared/Errors/AppError";
import cors from "cors";

const app = express();
createConnection();

 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()); 
app.use('/images', express.static('tmp'));
app.use(router);


app.use(
    (err: Error, request: Request,response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message:  `Internal server error - ${err.message}`
    })
});
 





 









app.listen(3333, () => console.log("Server is Running")); 