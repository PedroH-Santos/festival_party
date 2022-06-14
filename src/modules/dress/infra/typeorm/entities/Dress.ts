
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
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
    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Dress}