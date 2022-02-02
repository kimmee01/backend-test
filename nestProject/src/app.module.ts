import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './dal/entities/entity.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `localhost`,
      port: 3306,
      username: `root`,
      password: `password`,
      database: `DB_Demo`,
      charset:`utf8mb4_unicode_ci`,
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: false
    }),
    EntityModule,
    TicketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
