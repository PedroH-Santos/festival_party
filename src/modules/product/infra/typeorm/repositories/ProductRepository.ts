
import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";




class ProductRepository implements IProductRepository{
    private repository: Repository<Product>; 
    private perPage = 10;

    constructor(){
        this.repository = getRepository(Product);
    }



    async create({category_id, name , price,id}: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({category_id, name , price,id});
        await this.repository.save(product);
        return product;
        
    }

    async getAll(): Promise<Product[]>{
        const products = await this.repository.find({
            relations: ["category","images"]
        });
        return products;
    }

    async getCountAll(search: string): Promise<number> {
        const sql = this.repository.createQueryBuilder("products")
        if(search != undefined){
            sql.where("products.name like '%' || :name || '%'", {name: search })
        }
        const count = await sql.getCount();
        return count;
    }


    async getWithPagination(page: number,search: string): Promise<Product[]> {
        const sql = this.repository.createQueryBuilder("products")
        .skip(this.perPage * (page - 1))
        .take(this.perPage)
        .leftJoinAndSelect("products.images","products_images")
        .leftJoinAndSelect("products.category","products_categorys");

        if(search != undefined){
            sql.where("products.name like '%' || :name || '%'", {name: search })
        }
        const products = sql.getMany();
        return products;
    }


    async getById(id: string): Promise<Product> {
        const product = await this.repository.findOne(id,{
            relations: ["category","images"]

        });
        return product;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}


export { ProductRepository}