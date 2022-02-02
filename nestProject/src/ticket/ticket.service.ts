import { HttpStatus, Injectable } from "@nestjs/common"
import { statusTicket } from "src/core/enum";
import { setTimeZone } from "src/core/function";
import { tbTicket } from "src/dal/entities/tbTicket.entity";
import { getConnection, getRepository } from "typeorm";
import { CreateTicketDTO } from "./dto/create-ticket.dto"
import { ITicketModel } from "./interface/Iticket.interface";


@Injectable()
export class TicketService{

    constructor() { }

    async createTicket(createTicketDTO : CreateTicketDTO  ) { 
        var data = createTicketDTO  as ITicketModel
        data.status = statusTicket.pending
        data.createDated = setTimeZone()
        data.updateDated = setTimeZone()
        return  await getRepository(tbTicket).save(data);
    }

    async updateTicket() { 

    }

    async getTicket() { 
        var pendingData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.pending})
        .getMany()
        var acceptedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.accepted})
        .getMany()
        var rejectedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.rejected})
        .getMany()
        var resolvedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.resolved})
        .getMany()
        const data = {
            pendingData,
            acceptedData,
            rejectedData,
            resolvedData
        }
        return data
    }

}
