import { IDressRentalRepository } from "@modules/rentals/repositories/IDressRentalRepository";
import { AppError } from "@shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class FinishedDressRentalUseCase {

    constructor(
        @inject("DressRentalRepository")
        private dressRentalRepository: IDressRentalRepository,

    ) { }

    async execute(id: string): Promise<void>{

        //Cadastrar end date

        //Cadastrar Finanças

        const rental = await this.dressRentalRepository.getById(id);
        if(!rental){ 
            throw new AppError("Aluguel não encontrado !");
        }
        //rental.end_date = ;
        //Pegar data atual - Ver api que é utilizada no rentx


        

       // await this.dressRentalRepository.update( id);

    }
}


export { FinishedDressRentalUseCase }