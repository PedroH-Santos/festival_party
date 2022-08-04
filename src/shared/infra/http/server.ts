import "reflect-metadata"; 
import "dotenv/config"; 
import  express,{ NextFunction, Request,Response} from "express";
import "express-async-errors";
import { router } from "./routes";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import  createConnection  from "@shared/infra/typeorm";  
import "@shared/containers";
import { AppError } from "@shared/Errors/AppError";
import cors from "cors";
import rateLimiter from "./middlewares/rateLimiter";
const app = express();
createConnection(); 

Sentry.init({
    dsn: process.env.SENTRY_DNS,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app }),
    ],
  
    tracesSampleRate: 1.0,
  });
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());





app.use(rateLimiter);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()); 
app.use('/images', express.static('tmp'));
app.use(router);

app.use(Sentry.Handlers.errorHandler());

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