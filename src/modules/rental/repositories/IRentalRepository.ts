import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";






interface IRentalRepository {
    create({id,value, expected_delivery_date, product_id, user_id,description,start_date,client_id}: ICreateRentalDTO): Promise<Rental>;
    getByDate(product_id: string,start_date: Date): Promise<Rental[]>
    getAll(): Promise<Rental[]>;
    getById(id: string): Promise<Rental>;
    getAllToday(): Promise<Rental[]>;
    getAllFinishToday(): Promise<Rental[]>;
    getByProductId(product_id: string): Promise<Rental[]>;
    delete(id: string): Promise<void>;
    updateFinish(id: string,end_date: Date): Promise<void>;

}


export {IRentalRepository}