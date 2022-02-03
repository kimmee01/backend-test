import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as moment from "moment";

@Entity() 
export class tbTicket{ 
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name :string

    @Column({type:"longtext" ,nullable: true})
    description : string

    @Column()
    email : string

    @Column()
    phoneNumber : string

    @Column()
    status : string

    @Column({ type: 'datetime', default: null })
    createDated : Date

    @Column({ type: 'datetime', default: null })
    updateDated : Date
}