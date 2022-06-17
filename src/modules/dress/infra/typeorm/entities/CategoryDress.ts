
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'



@Entity("dress_categorys")
class CategoryDress {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
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

export {CategoryDress}