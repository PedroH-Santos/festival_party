import { Response,Request } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";




class DeleteUserController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);
        await deleteUserUseCase.execute({id});
        return response.status(201).send()

    }
}


export {DeleteUserController}