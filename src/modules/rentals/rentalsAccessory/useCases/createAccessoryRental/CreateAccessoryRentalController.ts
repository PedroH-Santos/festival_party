
import {Request,Response} from "express";
import { container } from "tsyringe";
import { CreateAccessoryRentalUseCase } from "./CreateAccessoryRentalUseCase";


class CreateAccessoryRentalController { 


    async handle(request: Request, response: Response): Promise<Response> {
        const {id,value, expected_delivery_date, accessory_id, user_id,description,start_date} = request.body;
        const createAccessoryRentalUseCase = container.resolve(CreateAccessoryRentalUseCase);
        await createAccessoryRentalUseCase.execute({id,value, expected_delivery_date, accessory_id, user_id,description,start_date});
        return response.status(201).send();
    }
} 

export {CreateAccessoryRentalController}