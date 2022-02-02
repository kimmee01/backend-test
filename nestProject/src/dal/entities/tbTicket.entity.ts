import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as moment from "moment";

@Entity() 
export class tbTicket{ 
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name :string

    @Column()
    description : string

    @Column()
    email : string

    @Column()
    phoneNumber : number

    @Column()
    status : string

    @Column({ type: 'datetime', default: null })
    createDated : Date

    @Column({ type: 'datetime', default: null })
    updateDated : Date
}