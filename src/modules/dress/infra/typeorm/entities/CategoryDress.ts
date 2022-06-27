
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'



@Entity("dress_categorys")
class CategoryDress {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
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

export {CategoryDress}