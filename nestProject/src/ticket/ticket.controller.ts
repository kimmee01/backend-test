import { BadRequestException, Body, Controller, Get, Post, Res, UseGuards, ValidationError, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { TicketService } from "./ticket.service";

@ApiTags('ticket')
@Controller('ticket')
export class TicketController {
    constructor(
        private readonly ticketService: TicketService
        ) { }


        
    @Get('get')
    getTicket() {
        return this.ticketService.getTicket();
    }
  
    @Post('create')
    createTicket(
        @Body(new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
        })) createTicketDTO: CreateTicketDTO
    ) {
        return this.ticketService.createTicket(createTicketDTO);
    }
    
}