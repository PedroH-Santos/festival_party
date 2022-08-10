import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { Repository, getRepository } from "typeorm";

import { User } from "../entities/User";




class UserRepository implements IUserRepository {
    private repository: Repository<User>
    private perPage = 10;
    constructor() {
        this.repository = getRepository(User);
    }


    async create({ id, name, email, password }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({ id, name, email, password });
        await this.repository.save(user);
        return user;

    }
    async getAll(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }

    async getCountAll(search: string): Promise<number> {
        const sql = this.repository.createQueryBuilder("users")
        if(search != undefined){
            sql.where("users.name like '%' || :name || '%'", {name: search })
        }
        const count = await sql.getCount();
        return count;
    }


    async getWithPagination(page: number,search: string): Promise<User[]> {
        const sql = await this.repository.createQueryBuilder("users")
        .skip(this.perPage * (page - 1))
        .take(this.perPage);

        if(search != undefined){
            sql.where("users.name like '%' || :name || '%'", {name: search })
        }
        const users = sql.getMany();
        return users;
    }

    async getById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
    async getByEmailWithPassword(email: string): Promise<User> {
        const user = await this.repository
        .createQueryBuilder('users')
        .select()
        .addSelect('users.password')
        .where('users.email = :email', {email: email})
        .getOne();
        return user;
    }
    async getByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});
        return user;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}


export { UserRepository }