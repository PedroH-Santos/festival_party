
import {Request,Response} from "express";
import { container } from "tsyringe";
import { CreateDressRentalUseCase } from "./CreateDressRentalUseCase";


class CreateDressRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const {id,value, expected_delivery_date, dress_id, user_id,description,start_date} = request.body;
        const createDressRentalUseCase = container.resolve(CreateDressRentalUseCase);
        await createDressRentalUseCase.execute({id,value, expected_delivery_date, dress_id, user_id,description,start_date});
        return response.status(201).send();
    }
}

export {CreateDressRentalController}