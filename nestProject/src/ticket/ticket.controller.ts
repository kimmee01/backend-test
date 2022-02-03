import { BadRequestException, Body, Controller, Get, Post, Put, Res, UseGuards, ValidationError, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { UpdateTicketDTO } from "./dto/updae-ticket.dto";
import { UpdateListTicketDTO } from "./dto/update-list.dto";
import { TicketService } from "./ticket.service";

@ApiTags('ticket')
@Controller('ticket')
export class TicketController {
    constructor(
        private readonly ticketService: TicketService
        ) { }


        
    @Get('get/ticketPending')
    getTicketPending() {
        return this.ticketService.getTicketPending();
    }
  
    @Get('get/ticketAccepted')
    getTicketAccepte() {
        return this.ticketService.getTicketAccepted();
    }
  
    @Get('get/ticketRejected')
    getTicketRejected() {
        return this.ticketService.getTicketRejected();
    }
  
    @Get('get/ticketResolved')
    getTicketResolved() {
        return this.ticketService.getTicketResolved();
    }
  
    @Post('create')
    createTicket(
        @Body(new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
        })) createTicketDTO: CreateTicketDTO
    ) {
        return this.ticketService.createTicket(createTicketDTO);
    }

    @Put('edit')
    editTicket(
        @Body(new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
        })) updateTicketDTO: UpdateTicketDTO
    ) {
        return this.ticketService.editTicket(updateTicketDTO);
    }

    @Put('update/listTicket')
    updateList(
        @Body(new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
        })) listUpdateTicketDTO: UpdateListTicketDTO
    ) {
        return this.ticketService.updateList(listUpdateTicketDTO);
    }
    
}