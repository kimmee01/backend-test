import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbTicket } from './tbTicket.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      tbTicket
    ])
  ],
  controllers: [],
  providers: [],
})
export class EntityModule {}
