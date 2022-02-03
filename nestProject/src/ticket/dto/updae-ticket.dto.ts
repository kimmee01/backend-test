import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator'

export class UpdateTicketDTO {

    @IsNotEmpty()
    @ApiProperty({
        description: 'this is description for id field',
    })
    readonly id: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'this is description for name field',
    })
    readonly name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'this is description for email field',
    })
    readonly email: string

    @ApiProperty({
        description: 'this is description for description field',
    })
    readonly description: string

    @IsNotEmpty()
    @ApiProperty({
        description: 'this is description for phoneNumber field',
    })
    readonly phoneNumber: string

    
}

