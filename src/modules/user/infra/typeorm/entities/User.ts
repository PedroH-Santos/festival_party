import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'



@Entity("users")
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column({select: false})
    password: string;
    @Column()
    email: string;
    @CreateDateColumn()
    created_at: Date; 
    @UpdateDateColumn()
    updated_at: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
export { User }