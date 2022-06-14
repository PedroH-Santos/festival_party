import { ICreateCategoryDressDTO } from "../dtos/ICreateCategoryDressDTO";
import { CategoryDress } from "../infra/typeorm/entities/CategoryDress";



interface ICategoryDressRepository {
    create({ name }: ICreateCategoryDressDTO): Promise<CategoryDress>;
}

export {ICategoryDressRepository}