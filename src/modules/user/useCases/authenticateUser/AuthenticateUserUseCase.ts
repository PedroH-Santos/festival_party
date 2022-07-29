

import { compare } from "bcryptjs";
import { AppError } from "@shared/Errors/AppError";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import auth from "@config/auth";
import { IDateProvider } from "@shared/containers/providers/DateProvider/IDateProvider";
import { IUserRepository } from "@modules/user/repositories/IUserRepository";




interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository") 
        private userRepository: IUserRepository,
        ){}

    
    async execute({email,password}: IRequest) : Promise<IResponse>{
        const user = await this.userRepository.getByEmail(email);
        const {secret_token,expires_in_token} = auth;
        if(!user) {
            throw new AppError("Email ou senha incorretos!");
        }
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new AppError("Email ou senha incorretos!");
        }
        const token = sign({},secret_token, {
            subject: user.id,
            expiresIn: expires_in_token
        });


        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }