




import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";





class CreateTransactionController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { id, value, type, origin, description } = request.body;
        const createTransactionUseCase = container.resolve(CreateTransactionUseCase);
        await createTransactionUseCase.execute({ id, value, type, origin, description });
        return response.status(201).send();
    }
}

export { CreateTransactionController }