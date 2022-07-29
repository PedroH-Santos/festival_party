
import {Request,Response} from "express";
import { container } from "tsyringe";
import { CreateRentalUseCase } from "./CreateRentalUseCase";


class CreateRentalController { 


    async handle(request: Request, response: Response): Promise<Response> {
        const {id,value, expected_delivery_date, product_id, user_id,client_id,description,start_date,status} = request.body;
        const createRentalUseCase = container.resolve(CreateRentalUseCase);
        await createRentalUseCase.execute({id,value, expected_delivery_date, product_id, user_id,description,start_date,client_id,status});
        return response.status(201).send();
    }
} 

export {CreateRentalController}