import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { User } from './user/entity/user.entity';
import { Filiacao } from './user/entity/filiacao.entity';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([User, Filiacao]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
