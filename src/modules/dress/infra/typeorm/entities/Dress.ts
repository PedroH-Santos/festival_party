
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'



@Entity("dress")
class Dress {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    categoryId: string;
    @Column()
    price: number;
    @CreateDateColumn()
    createdAt: Date; 
    @UpdateDateColumn()
    updatedAt: Date;
    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Dress}