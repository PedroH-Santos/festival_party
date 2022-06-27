
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'



@Entity("dress")
class Dress {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    category_id: string;
    @Column()
    price: number;
    @CreateDateColumn()
    created_at: Date; 
    @UpdateDateColumn()
    updated_at: Date;
    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Dress}