import "reflect-metadata"; 
import  express  from "express";
import { router } from "./routes";

import "@shared/infra/typeorm";
import "@shared/containers";

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
 
app.use(router);


 





 









app.listen(3333, () => console.log("Server is Running")); 