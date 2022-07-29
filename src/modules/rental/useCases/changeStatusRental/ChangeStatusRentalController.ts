import {Request,Response} from "express";
import { container } from "tsyringe";
import { ChangeStatusRentalUseCase } from "./ChangeStatusRentalUseCase";


class ChangeStatusRentalController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { status } = request.body;
        const changeStatusRentalUseCase = container.resolve(ChangeStatusRentalUseCase);
        await changeStatusRentalUseCase.execute({id,status});
        return response.status(201).send();
    }
}

export {ChangeStatusRentalController}