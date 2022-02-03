import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator'
import { UpdateTicketDTO } from './updae-ticket.dto'

export class UpdateListTicketDTO {

    @IsNotEmpty()
    @ApiProperty({
        description: 'this is description for id field',
    })
    readonly status : string

    @ApiProperty({
        description: 'this is description for data field',
    })
    readonly data: Array<UpdateTicketDTO>

    
    
}

