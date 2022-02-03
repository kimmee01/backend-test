import { HttpStatus, Injectable } from "@nestjs/common"
import { statusTicket } from "src/core/enum";
import { setTimeZone } from "src/core/function";
import { tbTicket } from "src/dal/entities/tbTicket.entity";
import { getConnection, getRepository } from "typeorm";
import { CreateTicketDTO } from "./dto/create-ticket.dto"
import { UpdateTicketDTO } from "./dto/updae-ticket.dto";
import { UpdateListTicketDTO } from "./dto/update-list.dto";
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

    async editTicket(updateTicketDTO:UpdateTicketDTO ) { 
        var data = updateTicketDTO as ITicketModel
        data.updateDated = setTimeZone()
        return await getRepository(tbTicket).update(updateTicketDTO.id , data)
    }

    async getTicketPending() { 
        var pendingData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.pending})
        .orderBy("ticket.updateDated", "DESC")
        .getMany()
     
        const data = {
            pendingData
        }
        return data
    }
    async getTicketAccepted() { 
        var acceptedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.accepted})
        .orderBy("ticket.updateDated", "DESC")
        .getMany()
      
        const data = {
            acceptedData,
        }
        return data
    }

    async getTicketRejected() { 
        var rejectedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.rejected})
        .orderBy("ticket.updateDated", "DESC")
        .getMany()
       
        const data = {
            rejectedData,
        }
        return data
    }
    async getTicketResolved() { 
        var resolvedData = await getRepository(tbTicket).createQueryBuilder("ticket")
        .where("ticket.status =:status", {status : statusTicket.resolved})
        .orderBy("ticket.updateDated", "DESC")
        .getMany()
        const data = {
            resolvedData
        }
        return data
    }

    async updateList(data : UpdateListTicketDTO) {
        const datalist = data.data as Array<ITicketModel>
        const filterSameData =  datalist.filter(element =>  {
            if (element.status != data.status) { 
                element.status  = data.status
                element.updateDated = setTimeZone()
                return element
            }
        });
        return await getRepository(tbTicket).save(filterSameData)
       
    }
}
